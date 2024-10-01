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
            return Response({"success": "Logged in successfully!","username": user.username }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class FindUserView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
            # Return the user data or customize the response as needed
            return Response({
                "username": user.username,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
            }, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response(
                {"error": "User not found", "username": username},
                status=status.HTTP_404_NOT_FOUND
            )

