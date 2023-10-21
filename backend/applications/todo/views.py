from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, RetrieveDestroyAPIView, RetrieveUpdateAPIView
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class TodoListAPIView(ListAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoRetrieveAPIView(RetrieveAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoCreateAPIView(CreateAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    serializer_class = TodoSerializer

class TodoRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoDestroyAPIView(RetrieveDestroyAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
