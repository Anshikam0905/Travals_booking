from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render 
from .models import Booking
from .serializers import BookingSerializer
# Create your views here.

@api_view(['GET'])
def get_bookings(request):
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

from django.http import JsonResponse

def booking_list(request):
    data = {
        "message": "Booking List API Working"
    }
    return JsonResponse(data)
@api_view(['POST'])
def create_booking(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)