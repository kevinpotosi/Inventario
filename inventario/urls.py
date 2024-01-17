from django.urls import path, include
from inventario import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'products',views.ProductView,'products')
router.register(r'adjustment',views.AdjustmentView,'adjustment')
router.register(r'detail_adjustment',views.Detail_AdjustmentView,'detail_adjustment')

urlpatterns = [
     path('', include(router.urls)),
]
 