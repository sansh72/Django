from rest_framework import serializers
from .models import HackathonRegistration

class HackathonRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HackathonRegistration
        fields = [
            'name',
            'email',
            'contact_number',
            'educational_institution',
            'year_of_graduation',
            'field_of_study',
            'city',
            'hackathons_name',
        ]

    def validate_email(self, value):
        # Add any custom validation for the email field if necessary
        return value

    def validate_contact_number(self, value):
        # Add any custom validation for contact number if necessary
        return value
