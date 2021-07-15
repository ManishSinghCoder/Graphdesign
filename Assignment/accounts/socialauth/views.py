from django.shortcuts import render
from .serilizers import contactserilizers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import models
@api_view(["POST"])
def contact(request):
    data = request.data
    serilizer = contactserilizers(data=data)
    if serilizer.is_valid():
        serilizer.save()
        return Response(data = serilizer.data,status=200)
    else:
        return Response(data=serilizer.errors,status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def allview(request):
    startdate = request.data['startdate']
    enddate = request.data['enddate']
    alldata = models.contactuser.objects.filter(created_at__range=(startdate,enddate))
    serilizer = contactserilizers(alldata,many=True).data
    return Response(data=serilizer,status=status.HTTP_202_ACCEPTED)

    
    
    
