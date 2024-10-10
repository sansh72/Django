from django.urls import path
from Trainings.views import *


urlpatterns = [
   
   path('trainings/', TrainingApplicationList.as_view(), name='training-application-list-create'),
  
]
