from rest_framework import viewsets
from .models import Adjustment, Product
from .serializers import ProductSerializer

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()