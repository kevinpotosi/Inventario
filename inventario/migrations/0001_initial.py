# Generated by Django 5.0 on 2023-12-08 06:19

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
                ('adj_state', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'adjustment',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DetailAdjustment',
            fields=[
                ('det_adj_id', models.AutoField(primary_key=True, serialize=False)),
                ('det_adj_quantity', models.DecimalField(blank=True, decimal_places=65535, max_digits=65535, null=True)),
                ('det_adj_modify', models.BooleanField(blank=True, null=True)),
                ('det_adj_state', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'detail_adjustment',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('pro_id', models.AutoField(primary_key=True, serialize=False)),
                ('pro_name', models.TextField(blank=True, null=True)),
                ('pro_descripcion', models.TextField(blank=True, null=True)),
                ('pro_iva', models.BooleanField(blank=True, null=True)),
                ('pro_cost', models.DecimalField(blank=True, decimal_places=65535, max_digits=65535, null=True)),
                ('pro_pvp', models.DecimalField(blank=True, decimal_places=65535, max_digits=65535, null=True)),
                ('pro_image', models.BinaryField(blank=True, null=True)),
                ('pro_state', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'product',
                'managed': False,
            },
        ),
    ]
