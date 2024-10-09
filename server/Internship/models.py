from django.db import models

class InternshipRegistration(models.Model):
    course_name = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    contact_no = models.CharField(max_length=15)
    institution = models.CharField(max_length=255)
    graduation_year = models.PositiveIntegerField()
    field_of_study = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    desired_position = models.CharField(max_length=255)
    resume = models.FileField(upload_to='resumes/')
    cover_letter = models.FileField(upload_to='cover_letters/')

    def __str__(self):
        return self.full_name
