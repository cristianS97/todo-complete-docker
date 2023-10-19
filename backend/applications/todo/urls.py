from django.urls import path
from .views import TodoListAPIView

urlpatterns = [
    path('todo', TodoListAPIView.as_view(), name='all-todos')
]
