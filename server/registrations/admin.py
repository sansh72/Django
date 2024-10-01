from django.contrib import admin
from .models import WebinarRegistration

@admin.register(WebinarRegistration)
class WebinarRegistrationAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'webinar_title', 'webinar_date', 'slot_1','slot_2','source','reminder_sent','certificate_sent')
