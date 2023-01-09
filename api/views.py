from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render


import os
import uuid

from .models import *
from .serializers import *
# File Upload
@api_view(['GET'])
def get_case_id(request):
    data = CASE.objects.values_list("id")
    case_id = 0
    if data.count() > 0 : case_id = data.last()[0] + 1
    else : case_id = 1
    return Response(case_id)

@api_view(['POST'])
def file_upload_xray(request):
    case_id = request.data['case_id']
    for filename, file in request.FILES.items():
        ext = file.name.split('.')[-1]
        file_name = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
        # file path relative to 'media' folder
        file_path = os.path.join('files', file_name)
        absolute_file_path = os.path.join('frontend/public', 'files', file_name)

        directory = os.path.dirname(absolute_file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(absolute_file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
    try:            
        case = CASE.objects.get(id=case_id)
        CASE.objects.filter(id=case_id).update(x_ray=file_path)
    except:
        newCASE = CASE()
        newCASE.id = case_id
        newCASE.x_ray = file_path
        newCASE.save()
    return Response({"status": 1, "message": "Success to upload X Ray Image."})
    
@api_view(['POST'])
def file_upload_lower(request):
    case_id = request.data['case_id']
    for filename, file in request.FILES.items():
        ext = file.name.split('.')[-1]
        file_name = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
        # file path relative to 'media' folder
        file_path = os.path.join('files', file_name)
        absolute_file_path = os.path.join('frontend/public', 'files', file_name)

        directory = os.path.dirname(absolute_file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(absolute_file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
    
    try:            
        case = CASE.objects.get(id=case_id)
        CASE.objects.filter(id=case_id).update(lower_stl=file_path)
    except:
        newCASE = CASE()
        newCASE.id = case_id
        newCASE.lower_stl = file_path
        newCASE.save()
    return Response({"status": 1, "message": "Success to upload Lower Stl Image."})
    
@api_view(['POST'])
def file_upload_upper(request):
    case_id = request.data['case_id']
    for filename, file in request.FILES.items():
        ext = file.name.split('.')[-1]
        file_name = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
        # file path relative to 'media' folder
        file_path = os.path.join('files', file_name)
        absolute_file_path = os.path.join('frontend/public', '/files', file_name)

        directory = os.path.dirname(absolute_file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(absolute_file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        
    try:            
        case = CASE.objects.get(id=case_id)
        CASE.objects.filter(id=case_id).update(upper_stl=file_path)
    except:
        newCASE = CASE()
        newCASE.id = case_id
        newCASE.upper_stl = file_path
        newCASE.save()
    return Response({"status": 1, "message": "Success to upload Upper Stl Image."})



# XRAY
@api_view(['POST'])
def get_xray(request):
    print(request.data)
    case_id = request.data['case_id']
    data = CASE.objects.filter(id=case_id).values_list("x_ray")
    x_ray = ""
    if data.count() > 0 : x_ray += data.first()[0]
    else : x_ray = ""
    x_ray = x_ray.replace("\\", "/")
    return Response(x_ray)