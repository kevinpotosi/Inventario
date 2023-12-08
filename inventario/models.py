#comentario
from django.db import models


class Adjustment(models.Model):
    user_id = models.IntegerField(blank=True, null=True)
    adj_id = models.AutoField(primary_key=True)
    adj_date = models.DateField(blank=True, null=True)
    adj_description = models.TextField(blank=True, null=True)
    adj_state = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'adjustment'


class DetailAdjustment(models.Model):
    pro = models.ForeignKey('Product', models.DO_NOTHING, blank=True, null=True)
    adj = models.ForeignKey(Adjustment, models.DO_NOTHING, blank=True, null=True)
    det_adj_id = models.AutoField(primary_key=True)
    det_adj_quantity = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    det_adj_modify = models.BooleanField(blank=True, null=True)
    det_adj_state = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'detail_adjustment'


class Product(models.Model):
    pro_id = models.AutoField(primary_key=True)
    pro_name = models.TextField(blank=True, null=True)
    pro_descripcion = models.TextField(blank=True, null=True)
    pro_iva = models.BooleanField(blank=True, null=True)
    pro_cost = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    pro_pvp = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    pro_image = models.BinaryField(blank=True, null=True)
    pro_state = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'product'