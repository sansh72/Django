from django.contrib import admin
from .models import InternshipRegistration

@admin.register(InternshipRegistration)
class InternshipRegistrationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'institution', 'graduation_year')
    search_fields = ('full_name', 'email', 'institution')
