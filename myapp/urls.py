from django.urls import path
from . import views
from .views import map_view

urlpatterns = [
    path('',views.login, name='login'),
    path('home/', views.home, name='home'),
    path('busmap/', views.busmap, name='busmap'),
    path('map/', views.map, name='map'),
    path('map/', map_view, name='map'),
    path('meal/', views.meal, name='meal'),
]
