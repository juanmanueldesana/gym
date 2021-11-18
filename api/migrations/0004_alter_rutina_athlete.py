# Generated by Django 3.2.9 on 2021-11-17 18:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0003_auto_20211112_1437'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rutina',
            name='athlete',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rutinas', to=settings.AUTH_USER_MODEL),
        ),
    ]
