from django.db.models import query
from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.
from rest_framework import generics, viewsets

from api.models import Clase, Rutina
from api.serializers import ClaseSerializer, RutinaSerializer, RegisterSerializer, MeSerializer

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

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)
