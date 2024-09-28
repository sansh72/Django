from django.shortcuts import render, redirect
from .forms import RegistrationForm
from .models import WebinarRegistration
from rest_framework import generics
from .serializers import RegistrationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import logging

logger = logging.getLogger('django')

def send_confirmation_email(user_email):
   send_mail(
      'Webinar Registration Confirmation',
      'Thank you for registering for our webinar!',
      settings.EMAIL_HOST_USER,
      [user_email],
      fail_silently=False,
      )
   
class WebinarRegistrationList(generics.ListCreateAPIView):
    queryset = WebinarRegistration.objects.all()
    serializer_class = RegistrationSerializer
    def perform_create(self, serializer):
        # Save the registration
        instance = serializer.save()
        # Send confirmation email after registration
        send_confirmation_email(instance.email)



# Response is send using serailizers of this above method and this above method is responsible for handling emials and registraions of webinar

def register_webinar(request):
 if request.method == 'POST':
    form = RegistrationForm(request.POST)
    if form.is_valid():
        form.save()
        # Redirect or show a success message
        user_email = form.cleaned_data.get('email')  # Get the registered user's email
        # print(user_email)
        send_confirmation_email(user_email)
        return redirect('success_page')
 else:
    form = RegistrationForm()
 return render(request, 'register.html', {'form': form})    


def view_registrations(request):
 registrations = WebinarRegistration.objects.all()
 return render(request, 'registrations_list.html', {'registrations': registrations})






class WebinarRegistrationAPI(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegistrationSerializer(data=request.data)
        
        if serializer.is_valid():
            # Save the valid data to the database    
            serializer.save()

            # Send confirmation email to the email provided in the API data
            user_email = serializer.data.get('email')
            logger.debug(f'Email: {user_email}')
            
            send_confirmation_email(user_email)
           
            # Return a success message and the saved data in the response
            return Response({
                'message': 'Registration successful',
                'data': {**serializer.data, 'message': 'Registered'},  # Merging dictionaries
            }, status=status.HTTP_201_CREATED)

        # If the data is not valid, return errors with a 400 Bad Request status
        return Response({
            'message': 'Registration failed',
            'errors': serializer.errors,
            'data': serializer.data
        }, status=status.HTTP_400_BAD_REQUEST)
    




