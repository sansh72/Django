from django.contrib import admin
from .models import HackathonRegistration

class HackathonRegistrationAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'contact_number', 'educational_institution', 'year_of_graduation', 'field_of_study', 'city', 'hackathons_name']
    search_fields = ['name', 'email', 'educational_institution', 'city', 'hackathons_name']
    list_filter = ['educational_institution', 'year_of_graduation', 'city', 'hackathons_name']

admin.site.register(HackathonRegistration, HackathonRegistrationAdmin)
