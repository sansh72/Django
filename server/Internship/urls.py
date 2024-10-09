from django.urls import path
from Internship.views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
   
   path('internships/', InternshipRegistrationList.as_view(), name='internship-list-create'),
  
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)