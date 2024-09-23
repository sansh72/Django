from django.db import models
from django.utils import timezone

class WebinarRegistration(models.Model):
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(unique=True)

    webinar_title = models.CharField(max_length=200,blank=True,null=True)
    webinar_date = models.DateField(default=timezone.now)
    slot_1 = models.BooleanField(default=False)
    slot_2 = models.BooleanField(default=False)
    source = models.CharField(max_length=100, choices=[
        ('Social Media', 'Social Media'),
        ('Word of Mouth', 'Word of Mouth'),
        ('Advertisement', 'Advertisement'),
        ('Other', 'Other'),
    ], blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"