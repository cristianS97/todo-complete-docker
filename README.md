# todo-complete-docker
---

## Tabla de contenidos
1. [Descripción del proyecto](#descripcion-del-proyecto)
2. [Api](#api)
3. [Comandos para levantar la api](#comandos-api)
4. [Base de datos](#base-de-datos)
5. [Comandos para levantar la base de datos](#comandos-bbdd)
6. [Frontend](#frontend)

## Descripción del proyecto
***
Aplicación para poder gestionar los ***"ToDo"***, se compone de una bbdd postgresql, una api como backend escrita en django, y un frontend en react

---
# Api

Para esta api se utiliza el lenguaje python con los frameworks django y django-rest-framework

## Dependencias importantes

1. [Python](https://www.python.org/): Versión 3.12
2. [Django](https://www.djangoproject.com/): Versión 4.2.6
3. [django-cors-headers](https://pypi.org/project/django-cors-headers/): **Pendiente de instalación**
4. [djangorestframework](https://www.django-rest-framework.org/): Versión 3.14.0
5. [Psycopg2](https://pypi.org/project/psycopg2/): Versión 2.9.9

---

## Comandos API

### Docker de la api
1. Crear imagen: docker build -t todo-django-docker-api .
2. Correr imagen: docker run --name backend -p 8000:8000 -d todo-django-docker-api

### Docker compose de la api
* Ejecutar: docker-compose -f backend.yml up -d
* Bajar servicio: docker-compose -f backend.yml down

---

# Base de datos

## Base de datos utilizada

Para este proyecto se hará uso de la base de datos postgres, esto ya que al ser una base de datos open source sin costo y la gran comunidad que existe

## Comandos BBDD

### Correr contenedor base de datos
* docker-compose -f postgres.yml up -d

### Bajar contenedor base de datos
* docker-compose -f postgres.yml down

---

# Frontend

## Diseño del frontend

El diseño será inspirado en los diseños de <a href="https://codepen.io/nicoHDL/pen/wvRRmNW" target="_blank">nicoHDL</a> y <a href="https://codepen.io/dishantsoni/pen/pgVeQW" target="_blank">Dishant</a> en codepen
