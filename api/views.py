from django.contrib.auth import get_user_model
from django.db.models import query
from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
# Create your views here.
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from django.contrib.auth.models import User

from api.models import Clase, Rutina
from api.serializers import ClaseSerializer, RutinaSerializer, RegisterSerializer, MeSerializer, MeUpdateSerializer

class ClaseViewSet(viewsets.ModelViewSet):
    serializer_class = ClaseSerializer
    queryset = Clase.objects.all()

class RutinaViewSet(viewsets.ModelViewSet):
    serializer_class = RutinaSerializer
    queryset = Rutina.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        athlete_id = self.request.query_params.get('athlete_id')
        if athlete_id is not None:
            queryset = queryset.filter(athlete_id=athlete_id)
        return queryset

@permission_classes([IsAdminUser])
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


class ListUsers(APIView):
   

    def get(self, request, format=None):
        usernames = [user.first_name+' '+user.last_name for user in User.objects.filter(is_staff=True).filter(is_superuser=False)]
        return Response(usernames)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)

@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def meUpdate(request):
    user = request.user
    data = request.data
    user = get_user_model().objects.filter(pk=user.id).first()
    user_serializer = MeUpdateSerializer(user, data=data, partial=True)
    if user_serializer.is_valid():
        user_serializer.save()
    return Response(user_serializer.data, 200)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def meDelete(request):
    user = request.user
    userDB = get_user_model().objects.filter(pk=user.id).first()
    userDB.delete()
    return Response("Eliminado", 200)