from django.db import models
import random

class Booking(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()

    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)

    departure_time = models.CharField(max_length=50)
    arrival_time = models.CharField(max_length=50)

    date = models.DateField()
    price = models.IntegerField()

    total_passengers = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.from_location} to {self.to_location}"


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