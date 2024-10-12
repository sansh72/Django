from django.urls import path
from .views import WorkshopRegistrationList

urlpatterns = [
    path('workshop/', WorkshopRegistrationList.as_view(), name='workshop-registrations'),
]
