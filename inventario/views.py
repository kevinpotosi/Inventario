from rest_framework import viewsets, filters
from inventario import serializers
from .models import Adjustment, DetailAdjustment, Product
from .serializers import ProductSerializer

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['pro_name']