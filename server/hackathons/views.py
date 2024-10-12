from rest_framework import generics
from .models import HackathonRegistration
from .serializers import HackathonRegistrationSerializer


class HackathonRegistrationList(generics.ListCreateAPIView):
    queryset = HackathonRegistration.objects.all()
    serializer_class = HackathonRegistrationSerializer

    def perform_create(self, serializer):
        # Any additional actions can be added here, like sending an email
        serializer.save()
