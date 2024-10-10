from django.db import models

class TrainingApplication(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    contact_no = models.CharField(max_length=15)
    city = models.CharField(max_length=100)
    university = models.CharField(max_length=255)
    branch = models.CharField(max_length=255)
    skills = models.TextField() 
    training_name = models.CharField(max_length=255, null=True, blank=True)
    learning_duration = models.CharField(max_length=50)  
    resume = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.name
