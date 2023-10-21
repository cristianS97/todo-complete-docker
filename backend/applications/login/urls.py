from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import Logout, CustomObtainAuthToken

urlpatterns = [
    path('login/', CustomObtainAuthToken.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout')
]
