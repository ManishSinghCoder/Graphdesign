from django.db import models
from datetime import datetime

class contactuser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    massage = models.TextField()
    created_at = models.DateField(auto_now_add=True)
