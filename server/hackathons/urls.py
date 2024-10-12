from django.urls import path
from hackathons.views import *

urlpatterns = [
    path('hackathon/', HackathonRegistrationList.as_view(), name='hackathon-registrations'),
]
