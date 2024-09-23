from rest_framework import serializers
from .models import *

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebinarRegistration
        fields = fields = ['first_name', 'last_name', 'email', 'webinar_title', 'webinar_date', 'slot_1','slot_2','source']
