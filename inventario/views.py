from rest_framework import viewsets
from .models import Adjustment, Product, Detail_Adjustment
from .serializers import ProductSerializer, AdjustmentSerializer, Detail_AdjustmentSerializer

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class AdjustmentView(viewsets.ModelViewSet):
    serializer_class = AdjustmentSerializer
    queryset = Adjustment.objects.all()

class Detail_AdjustmentView(viewsets.ModelViewSet):
    serializer_class = Detail_AdjustmentSerializer
    queryset = Detail_Adjustment.objects.all()
