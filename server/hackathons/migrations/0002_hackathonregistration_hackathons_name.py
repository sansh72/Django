# Generated by Django 5.1.1 on 2024-10-12 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hackathons', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hackathonregistration',
            name='hackathons_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
