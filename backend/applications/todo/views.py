from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, RetrieveDestroyAPIView, RetrieveUpdateAPIView
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
class TodoListAPIView(ListAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoRetrieveAPIView(RetrieveAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoCreateAPIView(CreateAPIView):
    serializer_class = TodoSerializer

class TodoRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoDestroyAPIView(RetrieveDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
