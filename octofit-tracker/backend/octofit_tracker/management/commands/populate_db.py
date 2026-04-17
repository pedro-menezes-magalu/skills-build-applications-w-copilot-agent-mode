from django.core.management.base import BaseCommand
from octofit_tracker import models
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Limpa dados antigos
        models.Team.objects.all().delete()
        models.Activity.objects.all().delete()
        models.Workout.objects.all().delete()
        models.Leaderboard.objects.all().delete()
        models.User.objects.all().delete()

        # Cria times
        marvel = models.Team.objects.create(name='Marvel', description='Time Marvel')
        dc = models.Team.objects.create(name='DC', description='Time DC')

        # Cria usuários
        tony = models.User.objects.create(email='tony@marvel.com', name='Tony Stark', team='Marvel')
        steve = models.User.objects.create(email='steve@marvel.com', name='Steve Rogers', team='Marvel')
        bruce = models.User.objects.create(email='bruce@marvel.com', name='Bruce Banner', team='Marvel')
        clark = models.User.objects.create(email='clark@dc.com', name='Clark Kent', team='DC')
        diana = models.User.objects.create(email='diana@dc.com', name='Diana Prince', team='DC')

        # Cria atividades
        from datetime import date
        models.Activity.objects.create(user=tony.name, type='run', duration=30, date=date.today())
        models.Activity.objects.create(user=steve.name, type='bike', duration=60, date=date.today())
        models.Activity.objects.create(user=clark.name, type='swim', duration=45, date=date.today())
        models.Activity.objects.create(user=diana.name, type='run', duration=50, date=date.today())

        # Cria treinos
        models.Workout.objects.create(name='Treino Marvel', description='Treino especial para heróis Marvel', difficulty='Avançado')
        models.Workout.objects.create(name='Treino DC', description='Treino especial para heróis DC', difficulty='Avançado')

        # Cria leaderboard
        models.Leaderboard.objects.create(team='Marvel', points=100)
        models.Leaderboard.objects.create(team='Marvel', points=90)
        models.Leaderboard.objects.create(team='DC', points=110)
        models.Leaderboard.objects.create(team='DC', points=95)

        self.stdout.write(self.style.SUCCESS('Banco populado com dados de teste!'))
