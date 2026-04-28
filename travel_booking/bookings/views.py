from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import Booking
from .serializers import BookingSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


# GET All Bookings / POST Booking
@api_view(['GET', 'POST'])
def booking_list(request):

    # ✅ Only logged-in user's bookings
    if request.method == 'GET':
        bookings = Booking.objects.filter(user=request.user).order_by('-created_at')
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BookingSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)  # 🔥 link booking to user
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)
# GET Single Booking / DELETE Booking
@api_view(['GET', 'DELETE'])
def booking_detail(request, id):

    try:
        booking = Booking.objects.get(id=id, user=request.user)
    except Booking.DoesNotExist:
        return Response({"error": "Not found"}, status=404)

    if request.method == 'GET':
        serializer = BookingSerializer(booking)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        booking.delete()
        return Response({"message": "Deleted"}, status=204)

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    # ✅ Check empty fields
    if not username or not email or not password:
        return Response({"error": "All fields are required"}, status=400)

    # ✅ Check existing user
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=400)

    # ✅ Create user
    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    return Response({"message": "User created successfully"})
@api_view(['POST'])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user is not None:
        refresh = RefreshToken.for_user(user)

        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "username": user.username
        })
    else:
        return Response({"error": "Invalid credentials"}, status=400)  
    # profile page
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def profile(request):
    bookings_count = Booking.objects.filter(user=request.user).count()

    return Response({
        "username": request.user.username,
        "email": request.user.email,
        "total_bookings": bookings_count
    })