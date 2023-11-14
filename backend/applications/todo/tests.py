from django.test import TestCase
from applications.todo.models import Todo
from applications.users.models import User

# Create your tests here.
class ToDoTestCase(TestCase):
    def setUp(self) -> None:
        Todo.objects.create(
            title="comer",
            complete=False,
            creator=User.objects.get(pk=1)
        )
        Todo.objects.create(
            title="dormir",
            complete=True,
            creator=User.objects.get(pk=1)
        )
        Todo.objects.create(
            title="correr",
            complete=False,
            creator=User.objects.get(pk=1)
        )

    def test_comprueba_completadas(self):
        completadas = Todo.objects.filter(complete=True)
        self.assertEqual(len(completadas), 1)

    def test_comprueba_no_completada(self):
        no_completada = Todo.objects.filter(complete=False)
        self.assertEqual(no_completada[0].title, "comer")
        self.assertEqual(no_completada[1].title, "correr")
