from django.urls import path
from app_student import views

app_name = 'student'

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
   
    
]
