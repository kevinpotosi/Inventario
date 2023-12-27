from django.urls import path, include
from inventario import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'products',views.ProductView,'products')

urlpatterns = [
     path('', include(router.urls)),
]
