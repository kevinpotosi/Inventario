from django.shortcuts import render
from .models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view
from inventario import serializers
from .models import Adjustment, DetailAdjustment, Product
from .serializers import ProductSerializer


def listproducts(request):
    products = Product.objects.all()
    print(products)
    return render(request,'listproducts.html', {'products' : products})

@api_view(['GET'])
def getProduct(request):
    product = Product.objects.all()
    serializers = ProductSerializer(product, many = True)
    return Response(serializers.data)