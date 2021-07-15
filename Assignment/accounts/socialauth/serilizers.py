from . import models
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
class contactserilizers(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField(validators=[UniqueValidator(queryset=models.contactuser.objects.all(), message="email aready exist")])
    massage = serializers.CharField()
    class Meta:
        model = models.contactuser
        fields = ['id','first_name', 'last_name', 'email','massage',"created_at"]
