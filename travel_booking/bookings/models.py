from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()   
    from_location = models.CharField(max_length=100)
    to = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    price = models.IntegerField()
    date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
