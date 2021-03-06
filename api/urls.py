from rest_framework import routers
from api.views import ClaseViewSet, RegisterView, RutinaViewSet, me, ListUsers, meDelete, meUpdate, UsersView
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'clases', ClaseViewSet)
router.register(r'rutinas', RutinaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view()),
    path('users/', ListUsers.as_view()),
    path('me/', me),
    path("meUpdate/", meUpdate),
    path("meDelete/", meDelete),
    path("getUsers/", UsersView.as_view())
]
