#!/bin/sh

echo "Hora de los tests"
python manage.py test applications.todo

echo "Levantar backend"
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic

gunicorn backend.wsgi:application --bind 0.0.0.0:8000