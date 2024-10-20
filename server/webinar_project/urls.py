from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('registrations.urls')),
    path('', include('authentication.urls')),
    path('', include('Internship.urls')),
    path('', include('Trainings.urls')),
    path('', include('hackathons.urls')),
    path('', include('workshops.urls')),
]

