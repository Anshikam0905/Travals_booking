from rest_framework import serializers
from .models import Booking, Passenger


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = ['passenger_name', 'age', 'seat_number']
        read_only_fields = ['seat_number']


class BookingSerializer(serializers.ModelSerializer):

    # ✅ IMPORTANT FIX
    passengers = PassengerSerializer(many=True, read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'

    def create(self, validated_data):
        passengers_data = validated_data.pop('passengers')

        booking = Booking.objects.create(**validated_data)

        for p in passengers_data:
            Passenger.objects.create(booking=booking, **p)

        return booking