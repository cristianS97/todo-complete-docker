from django.db import models
from django.utils.translation import gettext as _
from applications.users.models import User

# Create your models here.
class Todo(models.Model):
    title = models.CharField(
        verbose_name='Título de la tarea',
        max_length=50
    )
    complete = models.BooleanField(
        verbose_name='Completada',
        default=False
    )
    creator = models.ForeignKey(
        User,
        verbose_name='Creador',
        on_delete=models.CASCADE
    )
    created = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Fecha de creación'
    )
    updated = models.DateTimeField(
        auto_now=True,
        verbose_name='Última actualización'
    )
