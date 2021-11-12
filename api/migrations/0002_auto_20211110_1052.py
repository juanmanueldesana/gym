# Generated by Django 3.2.9 on 2021-11-10 13:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clase',
            old_name='descripcion',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='clase',
            old_name='nombre',
            new_name='name',
        ),
        migrations.AddField(
            model_name='clase',
            name='img',
            field=models.ImageField(default='imgs/default.jpg', upload_to='imgs/'),
        ),
        migrations.CreateModel(
            name='Rutina',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('staff', models.CharField(max_length=30)),
                ('itIsFinished', models.BooleanField(default=False)),
                ('exercise1', models.CharField(max_length=30)),
                ('exercise2', models.CharField(max_length=30)),
                ('exercise3', models.CharField(max_length=30)),
                ('exercise4', models.CharField(max_length=30)),
                ('exercise5', models.CharField(max_length=30)),
                ('athlete', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]