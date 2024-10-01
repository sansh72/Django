from django.contrib import admin
from django.urls import path
from registrations.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', register_webinar, name='register_webinar'),
    path('success/', lambda request: render(request, 'success.html'), name='success_page'),
    path('api/registrations/', WebinarRegistrationList.as_view(), name='WebinarRegistrationList'),
    path('registrations/', view_registrations, name='view_registrations'),
]