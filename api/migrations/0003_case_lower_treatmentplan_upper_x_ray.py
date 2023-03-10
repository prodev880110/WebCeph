# Generated by Django 4.1.5 on 2023-01-11 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='CASE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upper_stl', models.CharField(max_length=100, verbose_name='')),
                ('lower_stl', models.CharField(max_length=100, verbose_name='')),
                ('x_ray', models.CharField(max_length=100, verbose_name='')),
                ('upper_png', models.CharField(max_length=100, verbose_name='')),
                ('lower_png', models.CharField(max_length=100, verbose_name='')),
            ],
        ),
        migrations.CreateModel(
            name='LOWER',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lower_png', models.CharField(max_length=100, verbose_name='')),
                ('_1_distal_x', models.FloatField()),
                ('_1_distal_y', models.FloatField()),
                ('_1_mesial_x', models.FloatField()),
                ('_1_mesial_y', models.FloatField()),
                ('_2_distal_x', models.FloatField()),
                ('_2_distal_y', models.FloatField()),
                ('_2_mesial_x', models.FloatField()),
                ('_2_mesial_y', models.FloatField()),
                ('_3_distal_x', models.FloatField()),
                ('_3_distal_y', models.FloatField()),
                ('_3_mesial_x', models.FloatField()),
                ('_3_mesial_y', models.FloatField()),
                ('_4_distal_x', models.FloatField()),
                ('_4_distal_y', models.FloatField()),
                ('_4_mesial_x', models.FloatField()),
                ('_4_mesial_y', models.FloatField()),
                ('_5_distal_x', models.FloatField()),
                ('_5_distal_y', models.FloatField()),
                ('_5_mesial_x', models.FloatField()),
                ('_5_mesial_y', models.FloatField()),
                ('_6_distal_x', models.FloatField()),
                ('_6_distal_y', models.FloatField()),
                ('_6_mesial_x', models.FloatField()),
                ('_6_mesial_y', models.FloatField()),
                ('_7_distal_x', models.FloatField()),
                ('_7_distal_y', models.FloatField()),
                ('_7_mesial_x', models.FloatField()),
                ('_7_mesial_y', models.FloatField()),
                ('_8_distal_x', models.FloatField()),
                ('_8_distal_y', models.FloatField()),
                ('_8_mesial_x', models.FloatField()),
                ('_8_mesial_y', models.FloatField()),
                ('_9_distal_x', models.FloatField()),
                ('_9_distal_y', models.FloatField()),
                ('_9_mesial_x', models.FloatField()),
                ('_9_mesial_y', models.FloatField()),
                ('_10_distal_x', models.FloatField()),
                ('_10_distal_y', models.FloatField()),
                ('_10_mesial_x', models.FloatField()),
                ('_10_mesial_y', models.FloatField()),
                ('_11_distal_x', models.FloatField()),
                ('_11_distal_y', models.FloatField()),
                ('_11_mesial_x', models.FloatField()),
                ('_11_mesial_y', models.FloatField()),
                ('_12_distal_x', models.FloatField()),
                ('_12_distal_y', models.FloatField()),
                ('_12_mesial_x', models.FloatField()),
                ('_12_mesial_y', models.FloatField()),
                ('_13_distal_x', models.FloatField()),
                ('_13_distal_y', models.FloatField()),
                ('_13_mesial_x', models.FloatField()),
                ('_13_mesial_y', models.FloatField()),
                ('_14_distal_x', models.FloatField()),
                ('_14_distal_y', models.FloatField()),
                ('_14_mesial_x', models.FloatField()),
                ('_14_mesial_y', models.FloatField()),
                ('_6L_x', models.FloatField()),
                ('_6L_y', models.FloatField()),
                ('_5L_x', models.FloatField()),
                ('_5L_y', models.FloatField()),
                ('_4L_x', models.FloatField()),
                ('_4L_y', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='TreatmentPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upper', models.CharField(max_length=100, verbose_name='')),
                ('lower', models.CharField(max_length=100, verbose_name='')),
                ('x_ray', models.CharField(max_length=100, verbose_name='')),
                ('note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='UPPER',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upper_png', models.CharField(max_length=100, verbose_name='')),
                ('_1_distal_x', models.FloatField()),
                ('_1_distal_y', models.FloatField()),
                ('_1_mesial_x', models.FloatField()),
                ('_1_mesial_y', models.FloatField()),
                ('_2_distal_x', models.FloatField()),
                ('_2_distal_y', models.FloatField()),
                ('_2_mesial_x', models.FloatField()),
                ('_2_mesial_y', models.FloatField()),
                ('_3_distal_x', models.FloatField()),
                ('_3_distal_y', models.FloatField()),
                ('_3_mesial_x', models.FloatField()),
                ('_3_mesial_y', models.FloatField()),
                ('_4_distal_x', models.FloatField()),
                ('_4_distal_y', models.FloatField()),
                ('_4_mesial_x', models.FloatField()),
                ('_4_mesial_y', models.FloatField()),
                ('_5_distal_x', models.FloatField()),
                ('_5_distal_y', models.FloatField()),
                ('_5_mesial_x', models.FloatField()),
                ('_5_mesial_y', models.FloatField()),
                ('_6_distal_x', models.FloatField()),
                ('_6_distal_y', models.FloatField()),
                ('_6_mesial_x', models.FloatField()),
                ('_6_mesial_y', models.FloatField()),
                ('_7_distal_x', models.FloatField()),
                ('_7_distal_y', models.FloatField()),
                ('_7_mesial_x', models.FloatField()),
                ('_7_mesial_y', models.FloatField()),
                ('_8_distal_x', models.FloatField()),
                ('_8_distal_y', models.FloatField()),
                ('_8_mesial_x', models.FloatField()),
                ('_8_mesial_y', models.FloatField()),
                ('_9_distal_x', models.FloatField()),
                ('_9_distal_y', models.FloatField()),
                ('_9_mesial_x', models.FloatField()),
                ('_9_mesial_y', models.FloatField()),
                ('_10_distal_x', models.FloatField()),
                ('_10_distal_y', models.FloatField()),
                ('_10_mesial_x', models.FloatField()),
                ('_10_mesial_y', models.FloatField()),
                ('_11_distal_x', models.FloatField()),
                ('_11_distal_y', models.FloatField()),
                ('_11_mesial_x', models.FloatField()),
                ('_11_mesial_y', models.FloatField()),
                ('_12_distal_x', models.FloatField()),
                ('_12_distal_y', models.FloatField()),
                ('_12_mesial_x', models.FloatField()),
                ('_12_mesial_y', models.FloatField()),
                ('_13_distal_x', models.FloatField()),
                ('_13_distal_y', models.FloatField()),
                ('_13_mesial_x', models.FloatField()),
                ('_13_mesial_y', models.FloatField()),
                ('_14_distal_x', models.FloatField()),
                ('_14_distal_y', models.FloatField()),
                ('_14_mesial_x', models.FloatField()),
                ('_14_mesial_y', models.FloatField()),
                ('_6L_x', models.FloatField()),
                ('_6L_y', models.FloatField()),
                ('_5L_x', models.FloatField()),
                ('_5L_y', models.FloatField()),
                ('_4L_x', models.FloatField()),
                ('_4L_y', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='X_RAY',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x_ray', models.CharField(max_length=100, verbose_name='')),
                ('upper_jaw_1x', models.FloatField()),
                ('upper_jaw_1y', models.FloatField()),
                ('upper_jaw_2x', models.FloatField()),
                ('upper_jaw_2y', models.FloatField()),
                ('upper_teeth_1x', models.FloatField()),
                ('upper_teeth_1y', models.FloatField()),
                ('upper_teeth_2x', models.FloatField()),
                ('upper_teeth_2y', models.FloatField()),
                ('lower_jaw_1x', models.FloatField()),
                ('lower_jaw_1y', models.FloatField()),
                ('lower_jaw_2x', models.FloatField()),
                ('lower_jaw_2y', models.FloatField()),
                ('lower_teeth_1x', models.FloatField()),
                ('lower_teeth_1y', models.FloatField()),
                ('lower_teeth_2x', models.FloatField()),
                ('lower_teeth_2y', models.FloatField()),
            ],
        ),
    ]
