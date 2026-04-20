from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
     path('bookings/', get_bookings),
     path('bookings/create/',create_booking),
     path('bookings/', booking_list)
    # path('bookings/', bookings)
]
