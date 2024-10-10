from rest_framework import generics
from .models import TrainingApplication
from .serializers import TrainingApplicationSerializer


class TrainingApplicationList(generics.ListCreateAPIView):
    queryset = TrainingApplication.objects.all()
    serializer_class = TrainingApplicationSerializer

    def perform_create(self, serializer):
    
        serializer.save()
