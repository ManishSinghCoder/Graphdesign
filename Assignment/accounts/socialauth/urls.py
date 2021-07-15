from django.urls import path
from . import views
urlpatterns = [
    path('register/',views.contact ),
    path('alldata/',views.allview)
]
