from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

# Create your views here.
class Logout(APIView):
    def get(self, request, format=None):
        request.user.auth_token.delete()
        data = {
            "msg": "La sesión se ha cerrado correctamente",
            "usuario": request.user.email
        }
        return Response(data=data, status=status.HTTP_200_OK)

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})
