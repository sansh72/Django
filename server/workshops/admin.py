from django.contrib import admin
from .models import workshopRegistration

class WorkshopRegistrationAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'webinar_title', 'webinar_date', 'slot_1', 'slot_2', 'source']
    search_fields = ['first_name', 'last_name', 'email', 'webinar_title']
    list_filter = ['webinar_title', 'webinar_date', 'source']

admin.site.register(workshopRegistration, WorkshopRegistrationAdmin)
