from django.shortcuts import render
from .models import Product

def listproducts(request):
    products = Product.objects.all()
    print(products)
    return render(request,'listproducts.html', {'products' : products})

