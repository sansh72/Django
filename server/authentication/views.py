from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import SignupSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView

class SignupView(generics.CreateAPIView):
    serializer_class = SignupSerializer
    permission_classes = (AllowAny,)

class LoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            # You can generate tokens or use Django's built-in token authentication here
            return Response({"success": "Logged in successfully!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
