# Generated by Django 3.2.9 on 2021-11-19 22:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_rutina_athlete'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rutina',
            name='itIsFinished',
        ),
        migrations.RemoveField(
            model_name='rutina',
            name='staff',
        ),
    ]
