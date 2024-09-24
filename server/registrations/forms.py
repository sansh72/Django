from django import forms
from .models import WebinarRegistration

class RegistrationForm(forms.ModelForm):
 class Meta:
    model = WebinarRegistration
    fields = ['first_name', 'last_name', 'email', 'webinar_title', 'webinar_date', 'slot_1','slot_2','source','reminder_sent','certificate_sent']