from django.urls import path
from .views import listproducts
from . import views

urlpatterns = [
     path('', listproducts),
     path('get/', views.getProduct),
]
