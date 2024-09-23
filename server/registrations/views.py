from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import WebinarRegistration
from .serializers import RegistrationSerializer
from .forms import RegistrationForm


# Rename the class to follow proper naming conventions
class WebinarRegistrationAPI(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            # Save the valid data to the database
            serializer.save()
            # Return a success message and the saved data in the response
            return Response({
                'message': 'Registration successful',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)

        # If the data is not valid, return errors with a 400 Bad Request status
        return Response({
            'message': 'Registration failed',
            'errors': serializer.errors,
            'data': serializer.data
        }, status=status.HTTP_400_BAD_REQUEST)
    


    
def register_webinar(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirect to a success page or show a success message
            return redirect('success_page')
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})    

def view_registrations(request):
    registrations = WebinarRegistration.objects.all()
    return render(request, 'registrations_list.html', {'registrations': registrations})

