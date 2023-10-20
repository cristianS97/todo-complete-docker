# Generated by Django 4.2.6 on 2023-10-20 01:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Todo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(max_length=20, verbose_name="Título de la tarea"),
                ),
                (
                    "description",
                    models.CharField(
                        max_length=100, verbose_name="Descripción de la tarea"
                    ),
                ),
                (
                    "complete",
                    models.BooleanField(default=False, verbose_name="Completada"),
                ),
                (
                    "relevance",
                    models.IntegerField(
                        choices=[(1, "Baja"), (2, "Media"), (3, "Alta")],
                        default=1,
                        verbose_name="Importancia",
                    ),
                ),
                (
                    "created",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Fecha de creación"
                    ),
                ),
                (
                    "updated",
                    models.DateTimeField(
                        auto_now=True, verbose_name="Última actualización"
                    ),
                ),
                (
                    "creator",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Creador",
                    ),
                ),
            ],
        ),
    ]
