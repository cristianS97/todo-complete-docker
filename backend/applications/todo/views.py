from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
class TodoListAPIView(ListAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

