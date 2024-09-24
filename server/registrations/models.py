from django.db import models

class WebinarRegistration(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    webinar_title = models.CharField(max_length=200)
    webinar_date = models.DateField()
    slot_1 = models.BooleanField(default=False)
    slot_2 = models.BooleanField(default=False)
    source = models.CharField(max_length=100, choices=[
        ('Social Media', 'Social Media'),
        ('Word of Mouth', 'Word of Mouth'),
        ('Advertisement', 'Advertisement'),
        ('Other', 'Other'),
    ])

    reminder_sent = models.BooleanField(default=False)
    certificate_sent = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
