from rest_framework import serializers
from .models import InternshipRegistration

class InternshipRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InternshipRegistration
        fields = [
            'course_name',
            'full_name',
            'email',
            'contact_no',
            'institution',
            'graduation_year',
            'field_of_study',
            'city',
            'desired_position',
            'resume',
            'cover_letter'
        ]

    def validate_email(self, value):
        # Add custom validation for email if necessary
        return value

    def validate_contact_no(self, value):
        # Ensure contact number is valid if necessary
        return value
