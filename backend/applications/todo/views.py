from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, RetrieveDestroyAPIView, RetrieveUpdateAPIView
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class TodoListAPIView(ListAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]

class TodoRetrieveAPIView(RetrieveAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]

class TodoCreateAPIView(CreateAPIView):
    serializer_class = TodoSerializer
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]

class TodoRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]

class TodoDestroyAPIView(RetrieveDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
