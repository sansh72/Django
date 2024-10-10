from django.contrib import admin
from .models import TrainingApplication

class TrainingApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'contact_no', 'city', 'university', 'branch', 'training_name', 'learning_duration')
    search_fields = ('name', 'email', 'university', 'branch', 'skills', 'training_name')
    list_filter = ('city', 'university', 'branch', 'learning_duration', 'training_name')
    
admin.site.register(TrainingApplication, TrainingApplicationAdmin)
