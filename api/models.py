from django.db import models

# Create your models here.
class Clase(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    img = models.ImageField(upload_to='imgs/', default='imgs/default.jpg')

class Rutina(models.Model):
    athlete = models.ForeignKey(
        'auth.user',
        on_delete=models.CASCADE,
        related_name='rutinas'
    )
    itIsFinished = models.BooleanField(default=False)
    exercise1 = models.CharField(max_length=30, default='')
    exercise2 = models.CharField(max_length=30, default='')
    exercise3 = models.CharField(max_length=30, default='')
    exercise4 = models.CharField(max_length=30, default='')
    exercise5 = models.CharField(max_length=30, default='')