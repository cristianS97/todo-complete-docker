from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

# Create your views here.
class Logout(APIView):
    def get(self, request, format=None):
        request.user.auth_token.delete()
        data = {
            "msg": "Te has deslogeado con éxito",
            "usuario": request.user.email
        }
        return Response(data=data, status=status.HTTP_200_OK)
