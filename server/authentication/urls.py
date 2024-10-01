# authentication/urls.py
from django.urls import path
from django.urls import path
from .views import SignupView, LoginView , FindUserView 

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('finduser/<str:username>/', FindUserView.as_view(), name='finduser'),
]
