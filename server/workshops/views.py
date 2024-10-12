from rest_framework import generics
from .models import workshopRegistration
from .serializers import WorkshopRegistrationSerializer

class WorkshopRegistrationList(generics.ListCreateAPIView):
    queryset = workshopRegistration.objects.all()
    serializer_class = WorkshopRegistrationSerializer

    def perform_create(self, serializer):
        # Add any additional logic on save if necessary
        serializer.save()
