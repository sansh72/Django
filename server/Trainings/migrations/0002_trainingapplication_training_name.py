# Generated by Django 5.1.1 on 2024-10-10 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Trainings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='trainingapplication',
            name='training_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
