from rest_framework.serializers import ModelSerializer
from .models import Adjustment, DetailAdjustment, Product

class ProductSerializer (ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'