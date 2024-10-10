from rest_framework import serializers
from .models import TrainingApplication

class TrainingApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingApplication
        fields = [
            'name',
            'email',
            'contact_no',
            'city',
            'university',
            'branch',
            'skills',
            'training_name', 
            'learning_duration',
            'resume'
        ]

    def validate_email(self, value):
        
        return value

    def validate_contact_no(self, value):
   
        return value
