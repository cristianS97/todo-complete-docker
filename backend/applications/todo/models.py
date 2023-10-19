from django.db import models
from django.utils.translation import gettext as _
from applications.users.models import User

# Create your models here.
class Todo(models.Model):
    class RelevanceChoices(models.IntegerChoices):
        low = 1, _('Baja')
        medium = 2, _('Media')
        high = 3, _('Alta')

    title = models.CharField(
        verbose_name='Título de la tarea',
        max_length=20
    )
    description = models.CharField(
        verbose_name='Descripción de la tarea',
        max_length=100
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
    relevance = models.IntegerField(
        verbose_name='Importancia',
        choices=RelevanceChoices.choices,
        default=RelevanceChoices.low
    )
    created = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Fecha de creación'
    )
    updated = models.DateTimeField(
        auto_now=True,
        verbose_name='Última actualización'
    )
