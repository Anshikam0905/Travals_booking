from rest_framework import serializers
from .models import Booking, Passenger


# Passenger Serializer
class PassengerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Passenger
        fields = [
            "passenger_name",
            "age",
            "seat_number"
        ]
        read_only_fields = ["seat_number"]



# Booking Serializer
class BookingSerializer(serializers.ModelSerializer):

    passengers = PassengerSerializer(many=True)

    class Meta:
        model = Booking
        fields = "__all__"
        read_only_fields = [
            "booking_id",
            "payment_id",
            "transport_id",
            "created_at"
        ]


    def create(self, validated_data):

        passengers_data = validated_data.pop("passengers")

        booking = Booking.objects.create(**validated_data)

        for passenger in passengers_data:
            Passenger.objects.create(
                booking=booking,
                **passenger
            )

        return booking