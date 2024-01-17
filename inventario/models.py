
from django.db import models
from django.contrib.auth.models import AbstractUser


class Adjustment(models.Model):
    user_id = models.IntegerField(blank=True, null=True)
    adj_id = models.AutoField(primary_key=True)
    adj_date = models.DateField(blank=True, null=True)
    adj_description = models.TextField(blank=True, null=True)
    class Meta:
        db_table = 'adjustment'


class Product(models.Model):
    pro_id = models.AutoField(primary_key=True)
    pro_name = models.TextField(blank=True, null=True)
    pro_descripcion = models.TextField(blank=True, null=True)
    pro_iva = models.BooleanField(blank=True, null=True)
    pro_cost = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    pro_pvp = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    pro_image = models.TextField(blank=True, null=True)
    pro_state = models.BooleanField(blank=True, null=True)
    pro_stock = models.IntegerField(blank=True, null=True)
    class Meta:
        db_table = 'product'


class Detail_Adjustment(models.Model):
    pro_id = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    adj_id = models.ForeignKey(Adjustment, on_delete=models.CASCADE, null=True)
    det_adj_id = models.AutoField(primary_key=True)
    det_adj_quantity = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    class Meta:
<<<<<<< HEAD
        db_table = 'detail_adjustment'
=======
        db_table = 'detail_adjustment'

class CustomUser(AbstractUser):
>>>>>>> Bryan
