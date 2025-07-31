from .views import login_view, logout_view
from django.urls import path

app_name = 'user_auth'

urlpatterns = [
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
]
