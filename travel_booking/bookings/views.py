from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Booking
from .serializers import BookingSerializer


# GET All Bookings / POST Booking
@api_view(['GET', 'POST'])
def booking_list(request):

    if request.method == 'GET':
        bookings = Booking.objects.all().order_by('-created_at')
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)


    elif request.method == 'POST':
        serializer = BookingSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )



# GET Single Booking / DELETE Booking
@api_view(['GET', 'DELETE'])
def booking_detail(request, id):

    try:
        booking = Booking.objects.get(id=id)
    except Booking.DoesNotExist:
        return Response(
            {"error": "Booking not found"},
            status=status.HTTP_404_NOT_FOUND
        )


    # Get Single Booking
    if request.method == 'GET':
        serializer = BookingSerializer(booking)
        return Response(serializer.data)


    # Delete Booking
    elif request.method == 'DELETE':
        booking.delete()
        return Response(
            {"message": "Booking Cancelled Successfully"},
            status=status.HTTP_204_NO_CONTENT
        )