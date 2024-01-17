from rest_framework.serializers import ModelSerializer
from .models import Adjustment, Product, Detail_Adjustment

class ProductSerializer (ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class AdjustmentSerializer (ModelSerializer):
    class Meta:
        model = Adjustment
        fields = '__all__'

class Detail_AdjustmentSerializer (ModelSerializer):
    class Meta:
        model = Detail_Adjustment
        fields = '__all__'