from django.urls import path
from .views import (TodoListAPIView, TodoRetrieveAPIView, TodoCreateAPIView,
                    TodoRetrieveUpdateAPIView, TodoDestroyAPIView)

urlpatterns = [
    path('todos', TodoListAPIView.as_view(), name='all-todos'),
    path('todo/<int:pk>', TodoRetrieveAPIView.as_view(), name='single-todo'),
    path('todo/create', TodoCreateAPIView.as_view(), name='create-todo'),
    path('todo/update/<int:pk>', TodoRetrieveUpdateAPIView.as_view(), name='update-todo'),
    path('todo/delete/<int:pk>', TodoDestroyAPIView.as_view(), name='delete-todo')
]
