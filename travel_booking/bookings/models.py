from django.db import models
import random
import string


class Booking(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()

    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)

    departure_time = models.CharField(max_length=50)
    arrival_time = models.CharField(max_length=50)

    payment_type = models.CharField(max_length=20)
    payment_id = models.CharField(max_length=20, blank=True, unique=True)

    transport_name = models.CharField(max_length=100)
    transport_id = models.CharField(max_length=20, blank=True, unique=True)

    booking_id = models.CharField(max_length=20, blank=True, unique=True)

    date = models.DateField()
    price = models.IntegerField()

    total_passengers = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)


    # Generate Booking ID
    def generate_booking_id(self):
        return "BK" + ''.join(random.choices(string.digits, k=6))


    # Generate Payment ID
    def generate_payment_id(self):
        return "PAY" + ''.join(random.choices(string.digits, k=8))


    # Generate Transport ID
    def generate_transport_id(self):
        return "TR" + ''.join(random.choices(string.digits, k=4))


    def save(self, *args, **kwargs):

        if not self.booking_id:
            booking = self.generate_booking_id()
            while Booking.objects.filter(booking_id=booking).exists():
                booking = self.generate_booking_id()
            self.booking_id = booking


        if not self.payment_id:
            payment = self.generate_payment_id()
            while Booking.objects.filter(payment_id=payment).exists():
                payment = self.generate_payment_id()
            self.payment_id = payment


        if not self.transport_id:
            transport = self.generate_transport_id()
            while Booking.objects.filter(transport_id=transport).exists():
                transport = self.generate_transport_id()
            self.transport_id = transport


        super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.booking_id} - {self.from_location} to {self.to_location}"



# Passenger Model
class Passenger(models.Model):

    booking = models.ForeignKey(
        Booking,
        on_delete=models.CASCADE,
        related_name="passengers"
    )

    passenger_name = models.CharField(max_length=100)
    age = models.IntegerField()
    seat_number = models.CharField(max_length=10, blank=True, unique=True)


    def generate_seat(self):
        return f"S{random.randint(1,150)}"


    def save(self, *args, **kwargs):

        if not self.seat_number:
            seat = self.generate_seat()

            # Ensure seat is unique
            while Passenger.objects.filter(seat_number=seat).exists():
                seat = self.generate_seat()

            self.seat_number = seat

        super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.passenger_name} - {self.seat_number}"