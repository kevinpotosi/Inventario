# Generated by Django 5.0 on 2023-12-30 10:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Adjustment',
            fields=[
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('adj_id', models.AutoField(primary_key=True, serialize=False)),
                ('adj_date', models.DateField(blank=True, null=True)),
                ('adj_description', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'adjustment',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('pro_id', models.AutoField(primary_key=True, serialize=False)),
                ('pro_name', models.TextField(blank=True, null=True)),
                ('pro_descripcion', models.TextField(blank=True, null=True)),
                ('pro_iva', models.BooleanField(blank=True, null=True)),
                ('pro_cost', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('pro_pvp', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('pro_image', models.TextField(blank=True, null=True)),
                ('pro_state', models.BooleanField(blank=True, null=True)),
                ('pro_stock', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
            ],
            options={
                'db_table': 'product',
            },
        ),
        migrations.CreateModel(
            name='Detail_Adjustment',
            fields=[
                ('det_adj_id', models.AutoField(primary_key=True, serialize=False)),
                ('det_adj_quantity', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('adj_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.adjustment')),
                ('pro_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.product')),
            ],
            options={
                'db_table': 'detail_adjustment',
            },
        ),
    ]
