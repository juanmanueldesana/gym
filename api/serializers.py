from django.db.models import fields
from rest_framework import serializers
from api.models import Clase, Rutina
from django.contrib.auth import get_user_model


class ClaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clase
        fields = "__all__"

class RutinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rutina
        fields = "__all__"

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"