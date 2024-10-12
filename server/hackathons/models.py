from django.db import models

class HackathonRegistration(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15)
    educational_institution = models.CharField(max_length=255)
    year_of_graduation = models.IntegerField()
    field_of_study = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    hackathons_name = models.CharField(max_length=255 , null=True, blank=True)

    def __str__(self):
        return self.name
