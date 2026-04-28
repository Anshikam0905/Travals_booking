from django.urls import path
from . import views

urlpatterns = [
    path('bookings/', views.booking_list),
    path('bookings/<int:id>/', views.booking_detail),
    path('register/', views.register),
    path('login/', views.login),
    path('profile/', views.profile),

]