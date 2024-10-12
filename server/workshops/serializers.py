from rest_framework import serializers
from .models import workshopRegistration

class WorkshopRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = workshopRegistration
        fields = [
            'first_name',
            'last_name',
            'email',
            'webinar_title',
            'webinar_date',
            'slot_1',
            'slot_2',
            'source',
        ]

    def validate_email(self, value):
        # Add custom validation for the email field if needed
        return value
