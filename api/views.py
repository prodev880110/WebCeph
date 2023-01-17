from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render


import os
import uuid

from .models import *
from .serializers import *
from .ai_model import *

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
    print(request.FILES.items)
    for filename, file in request.FILES.items():
        ext = file.name.split('.')[-1]
        file_name = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
        # file path relative to 'media' folder
        file_path = os.path.join('files', file_name)
        absolute_file_path = os.path.join('frontend/build', 'files', file_name)

        directory = os.path.dirname(absolute_file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(absolute_file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        file_path = file_path.replace("\\", "/")
        points = generate_xray_points(absolute_file_path)
        try:            
            case = CASE.objects.get(id=case_id)
            CASE.objects.filter(id=case_id).update(x_ray=file_path)
        except:
            newCASE = CASE()
            newCASE.id = case_id
            newCASE.x_ray = file_path
            newCASE.save()

        newX_RAY = X_RAY()
        newX_RAY.id = case_id
        # newX_RAY.x_ray = file_path
        newX_RAY.x_ray = "files/xray.png"
        newX_RAY.upper_jaw_1x = points[0]
        newX_RAY.upper_jaw_1y = points[1]
        newX_RAY.upper_jaw_2x = points[2]
        newX_RAY.upper_jaw_2y = points[3]
        newX_RAY.upper_teeth_1x = points[4]
        newX_RAY.upper_teeth_1y = points[5]
        newX_RAY.upper_teeth_2x = points[6]
        newX_RAY.upper_teeth_2y = points[7]
        newX_RAY.lower_jaw_1x = points[8]
        newX_RAY.lower_jaw_1y = points[9]
        newX_RAY.lower_jaw_2x = points[10]
        newX_RAY.lower_jaw_2y = points[11]
        newX_RAY.lower_teeth_1x = points[12]
        newX_RAY.lower_teeth_1y = points[13]
        newX_RAY.lower_teeth_2x = points[14]
        newX_RAY.lower_teeth_2y = points[15]
        newX_RAY.save()
        return Response({"status": 1, "message": "Success to upload X Ray Image."})
    
@api_view(['POST'])
def file_upload_lower(request):
    case_id = request.data['case_id']
    for filename, file in request.FILES.items():
        ext = file.name.split('.')[-1]
        file_name = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
        # file path relative to 'media' folder
        file_path = os.path.join('files', file_name)
        absolute_file_path = os.path.join('frontend/build', 'files', file_name)

        directory = os.path.dirname(absolute_file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(absolute_file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        src = absolute_file_path  # may be stl or obj
        dst = absolute_file_path+".obj"  # may be stl or obj
        callback = lambda code: print(code)

    
    file_path = file_path.replace("\\", "/")
    generated_png = generate_stl2png(absolute_file_path)
    points = generate_lower_points(absolute_file_path)
    try:            
        case = CASE.objects.get(id=case_id)
        CASE.objects.filter(id=case_id).update(lower_stl=file_path, lower_png="files/lower.png")
    except:
        newCASE = CASE()
        newCASE.id = case_id
        newCASE.lower_stl = file_path
        newCASE.save()

    newLOWER = LOWER()
    newLOWER.id = case_id
    # newLOWER.lower_png = generated_png
    newLOWER.lower_png = "files/lower.png"
    newLOWER._1_distal_x = points[0]
    newLOWER._1_distal_y = points[1]
    newLOWER._1_mesial_x = points[2]
    newLOWER._1_mesial_y = points[3]
    newLOWER._2_distal_x = points[4]
    newLOWER._2_distal_y = points[5]
    newLOWER._2_mesial_x = points[6]
    newLOWER._2_mesial_y = points[7]
    newLOWER._3_distal_x = points[8]
    newLOWER._3_distal_y = points[8]
    newLOWER._3_mesial_x = points[10]
    newLOWER._3_mesial_y = points[11]
    newLOWER._4_distal_x = points[12]
    newLOWER._4_distal_y = points[13]
    newLOWER._4_mesial_x = points[14]
    newLOWER._4_mesial_y = points[15]
    newLOWER._5_distal_x = points[16]
    newLOWER._5_distal_y = points[17]
    newLOWER._5_mesial_x = points[18]
    newLOWER._5_mesial_y = points[19]
    newLOWER._6_distal_x = points[20]
    newLOWER._6_distal_y = points[21]
    newLOWER._6_mesial_x = points[22]
    newLOWER._6_mesial_y = points[23]
    newLOWER._7_distal_x = points[24]
    newLOWER._7_distal_y = points[25]
    newLOWER._7_mesial_x = points[26]
    newLOWER._7_mesial_y = points[27]
    newLOWER._8_distal_x = points[28]
    newLOWER._8_distal_y = points[29]
    newLOWER._8_mesial_x = points[30]
    newLOWER._8_mesial_y = points[31]
    newLOWER._9_distal_x = points[32]
    newLOWER._9_distal_y = points[33]
    newLOWER._9_mesial_x = points[34]
    newLOWER._9_mesial_y = points[35]
    newLOWER._10_distal_x = points[36]
    newLOWER._10_distal_y = points[37]
    newLOWER._10_mesial_x = points[38]
    newLOWER._10_mesial_y = points[39]
    newLOWER._11_distal_x = points[40]
    newLOWER._11_distal_y = points[41]
    newLOWER._11_mesial_x = points[42]
    newLOWER._11_mesial_y = points[43]
    newLOWER._12_distal_x = points[44]
    newLOWER._12_distal_y = points[45]
    newLOWER._12_mesial_x = points[46]
    newLOWER._12_mesial_y = points[47]
    newLOWER._13_distal_x = points[48]
    newLOWER._13_distal_y = points[49]
    newLOWER._13_mesial_x = points[50]
    newLOWER._13_mesial_y = points[51]
    newLOWER._14_distal_x = points[52]
    newLOWER._14_distal_y = points[53]
    newLOWER._14_mesial_x = points[54]
    newLOWER._14_mesial_y = points[55]
    newLOWER._6L_x = 123
    newLOWER._6L_y = 123
    newLOWER._5L_x = 123
    newLOWER._5L_y = 123
    newLOWER._4L_x = 123
    newLOWER._4L_y = 123
    newLOWER.save()
    return Response({"status": 1, "message": "Success to upload Lower Stl Image."})
    
@api_view(['POST'])
def file_upload_upper(request):
    case_id = request.data['case_id']
    for filename, file in request.FILES.items():
        ext = file.name.split('.')[-1]
        file_name = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
        # file path relative to 'media' folder
        file_path = os.path.join('files', file_name)
        absolute_file_path = os.path.join('frontend/build', 'files', file_name)

        directory = os.path.dirname(absolute_file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        with open(absolute_file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        
    file_path = file_path.replace("\\", "/")
    generated_png = generate_stl2png(absolute_file_path)
    points = generate_upper_points(absolute_file_path)
    try:            
        case = CASE.objects.get(id=case_id)
        CASE.objects.filter(id=case_id).update(upper_stl=file_path, upper_png="files/upper.png")
    except:
        newCASE = CASE()
        newCASE.id = case_id
        newCASE.upper_stl = file_path
        newCASE.save()

        
    newUPPER = UPPER()
    newUPPER.id = case_id
    # newUPPER.upper_png = generated_png
    newUPPER.upper_png = "files/upper.png"
    newUPPER._1_distal_x = points[0]
    newUPPER._1_distal_y = points[1]
    newUPPER._1_mesial_x = points[2]
    newUPPER._1_mesial_y = points[3]
    newUPPER._2_distal_x = points[4]
    newUPPER._2_distal_y = points[5]
    newUPPER._2_mesial_x = points[6]
    newUPPER._2_mesial_y = points[7]
    newUPPER._3_distal_x = points[8]
    newUPPER._3_distal_y = points[8]
    newUPPER._3_mesial_x = points[10]
    newUPPER._3_mesial_y = points[11]
    newUPPER._4_distal_x = points[12]
    newUPPER._4_distal_y = points[13]
    newUPPER._4_mesial_x = points[14]
    newUPPER._4_mesial_y = points[15]
    newUPPER._5_distal_x = points[16]
    newUPPER._5_distal_y = points[17]
    newUPPER._5_mesial_x = points[18]
    newUPPER._5_mesial_y = points[19]
    newUPPER._6_distal_x = points[20]
    newUPPER._6_distal_y = points[21]
    newUPPER._6_mesial_x = points[22]
    newUPPER._6_mesial_y = points[23]
    newUPPER._7_distal_x = points[24]
    newUPPER._7_distal_y = points[25]
    newUPPER._7_mesial_x = points[26]
    newUPPER._7_mesial_y = points[27]
    newUPPER._8_distal_x = points[28]
    newUPPER._8_distal_y = points[29]
    newUPPER._8_mesial_x = points[30]
    newUPPER._8_mesial_y = points[31]
    newUPPER._9_distal_x = points[32]
    newUPPER._9_distal_y = points[33]
    newUPPER._9_mesial_x = points[34]
    newUPPER._9_mesial_y = points[35]
    newUPPER._10_distal_x = points[36]
    newUPPER._10_distal_y = points[37]
    newUPPER._10_mesial_x = points[38]
    newUPPER._10_mesial_y = points[39]
    newUPPER._11_distal_x = points[40]
    newUPPER._11_distal_y = points[41]
    newUPPER._11_mesial_x = points[42]
    newUPPER._11_mesial_y = points[43]
    newUPPER._12_distal_x = points[44]
    newUPPER._12_distal_y = points[45]
    newUPPER._12_mesial_x = points[46]
    newUPPER._12_mesial_y = points[47]
    newUPPER._13_distal_x = points[48]
    newUPPER._13_distal_y = points[49]
    newUPPER._13_mesial_x = points[50]
    newUPPER._13_mesial_y = points[51]
    newUPPER._14_distal_x = points[52]
    newUPPER._14_distal_y = points[53]
    newUPPER._14_mesial_x = points[54]
    newUPPER._14_mesial_y = points[55]
    newUPPER._6L_x = 123
    newUPPER._6L_y = 123
    newUPPER._5L_x = 123
    newUPPER._5L_y = 123
    newUPPER._4L_x = 123
    newUPPER._4L_y = 123
    newUPPER.save()
    return Response({"status": 1, "message": "Success to upload Upper Stl Image."})



# XRAY
@api_view(['POST'])
def get_xray(request):
    case_id = request.data['case_id']
    
    xray_points = X_RAY.objects.filter(id=case_id).values()
    # print(xray_points[0]['id'])
    return Response(xray_points[0])

@api_view(['POST'])
def save_xray_points(request):
    data = request.data
    X_RAY.objects.filter(id=data["id"]).update(
        upper_jaw_1x = data["upper_jaw_1x"],
        upper_jaw_1y = data["upper_jaw_1y"],
        upper_jaw_2x = data["upper_jaw_2x"],
        upper_jaw_2y = data["upper_jaw_2y"],
        upper_teeth_1x = data["upper_teeth_1x"],
        upper_teeth_1y = data["upper_teeth_1y"],
        upper_teeth_2x = data["upper_teeth_2x"],
        upper_teeth_2y = data["upper_teeth_2y"],
        lower_jaw_1x = data["lower_jaw_1x"],
        lower_jaw_1y = data["lower_jaw_1y"],
        lower_jaw_2x = data["lower_jaw_2x"],
        lower_jaw_2y = data["lower_jaw_2y"],
        lower_teeth_1x = data["lower_teeth_1x"],
        lower_teeth_1y = data["lower_teeth_1y"],
        lower_teeth_2x = data["lower_teeth_2x"],
        lower_teeth_2y = data["lower_teeth_2y"]
    )

    return Response({"msg_type": "alert-info", "msg": "Success Save Data"})
    
# Lower png
@api_view(['POST'])
def get_lower_png(request):
    case_id = request.data['case_id']
    
    lower_points = LOWER.objects.filter(id=case_id).values()
    # print(xray_points[0]['id'])
    return Response(lower_points[0])   

@api_view(['POST'])
def save_lower_points(request):
    data = request.data
    LOWER.objects.filter(id=data["id"]).update(
        _1_distal_x = data["_1_distal_x"],
        _1_distal_y = data["_1_distal_y"],
        _1_mesial_x = data["_1_mesial_x"],
        _1_mesial_y = data["_1_mesial_y"],
        _2_distal_x = data["_2_distal_x"],
        _2_distal_y = data["_2_distal_y"],
        _2_mesial_x = data["_2_mesial_x"],
        _2_mesial_y = data["_2_mesial_y"],
        _3_distal_x = data["_3_distal_x"],
        _3_distal_y = data["_3_distal_y"],
        _3_mesial_x = data["_3_mesial_x"],
        _3_mesial_y = data["_3_mesial_y"],
        _4_distal_x = data["_4_distal_x"],
        _4_distal_y = data["_4_distal_y"],
        _4_mesial_x = data["_4_mesial_x"],
        _4_mesial_y = data["_4_mesial_y"],
        _5_distal_x = data["_5_distal_x"],
        _5_distal_y = data["_5_distal_y"],
        _5_mesial_x = data["_5_mesial_x"],
        _5_mesial_y = data["_5_mesial_y"],
        _6_distal_x = data["_6_distal_x"],
        _6_distal_y = data["_6_distal_y"],
        _6_mesial_x = data["_6_mesial_x"],
        _6_mesial_y = data["_6_mesial_y"],
        _7_distal_x = data["_7_distal_x"],
        _7_distal_y = data["_7_distal_y"],
        _7_mesial_x = data["_7_mesial_x"],
        _7_mesial_y = data["_7_mesial_y"],
        _8_distal_x = data["_8_distal_x"],
        _8_distal_y = data["_8_distal_y"],
        _8_mesial_x = data["_8_mesial_x"],
        _8_mesial_y = data["_8_mesial_y"],
        _9_distal_x = data["_9_distal_x"],
        _9_distal_y = data["_9_distal_y"],
        _9_mesial_x = data["_9_mesial_x"],
        _9_mesial_y = data["_9_mesial_y"],
        _10_distal_x = data["_10_distal_x"],
        _10_distal_y = data["_10_distal_y"],
        _10_mesial_x = data["_10_mesial_x"],
        _10_mesial_y = data["_10_mesial_y"],
        _11_distal_x = data["_11_distal_x"],
        _11_distal_y = data["_11_distal_y"],
        _11_mesial_x = data["_11_mesial_x"],
        _11_mesial_y = data["_11_mesial_y"],
        _12_distal_x = data["_12_distal_x"],
        _12_distal_y = data["_12_distal_y"],
        _12_mesial_x = data["_12_mesial_x"],
        _12_mesial_y = data["_12_mesial_y"],
        _13_distal_x = data["_13_distal_x"],
        _13_distal_y = data["_13_distal_y"],
        _13_mesial_x = data["_13_mesial_x"],
        _13_mesial_y = data["_13_mesial_y"],
        _14_distal_x = data["_14_distal_x"],
        _14_distal_y = data["_14_distal_y"],
        _14_mesial_x = data["_14_mesial_x"],
        _14_mesial_y = data["_14_mesial_y"],
        _6L_x = data["_6L_x"],
        _6L_y = data["_6L_y"],
        _5L_x = data["_5L_x"],
        _5L_y = data["_5L_y"],
        _4L_x = data["_4L_x"],
        _4L_y = data["_4L_y"]
    )
    return Response({"msg_type": "alert-info", "msg": "Success Save Data"})

    
# Upper png
@api_view(['POST'])
def get_upper_png(request):
    case_id = request.data['case_id']
    
    upper_points = UPPER.objects.filter(id=case_id).values()
    # print(xray_points[0]['id'])
    return Response(upper_points[0])
@api_view(['POST'])
def save_upper_points(request):
    data = request.data
    UPPER.objects.filter(id=data["id"]).update(
        _1_distal_x = data["_1_distal_x"],
        _1_distal_y = data["_1_distal_y"],
        _1_mesial_x = data["_1_mesial_x"],
        _1_mesial_y = data["_1_mesial_y"],
        _2_distal_x = data["_2_distal_x"],
        _2_distal_y = data["_2_distal_y"],
        _2_mesial_x = data["_2_mesial_x"],
        _2_mesial_y = data["_2_mesial_y"],
        _3_distal_x = data["_3_distal_x"],
        _3_distal_y = data["_3_distal_y"],
        _3_mesial_x = data["_3_mesial_x"],
        _3_mesial_y = data["_3_mesial_y"],
        _4_distal_x = data["_4_distal_x"],
        _4_distal_y = data["_4_distal_y"],
        _4_mesial_x = data["_4_mesial_x"],
        _4_mesial_y = data["_4_mesial_y"],
        _5_distal_x = data["_5_distal_x"],
        _5_distal_y = data["_5_distal_y"],
        _5_mesial_x = data["_5_mesial_x"],
        _5_mesial_y = data["_5_mesial_y"],
        _6_distal_x = data["_6_distal_x"],
        _6_distal_y = data["_6_distal_y"],
        _6_mesial_x = data["_6_mesial_x"],
        _6_mesial_y = data["_6_mesial_y"],
        _7_distal_x = data["_7_distal_x"],
        _7_distal_y = data["_7_distal_y"],
        _7_mesial_x = data["_7_mesial_x"],
        _7_mesial_y = data["_7_mesial_y"],
        _8_distal_x = data["_8_distal_x"],
        _8_distal_y = data["_8_distal_y"],
        _8_mesial_x = data["_8_mesial_x"],
        _8_mesial_y = data["_8_mesial_y"],
        _9_distal_x = data["_9_distal_x"],
        _9_distal_y = data["_9_distal_y"],
        _9_mesial_x = data["_9_mesial_x"],
        _9_mesial_y = data["_9_mesial_y"],
        _10_distal_x = data["_10_distal_x"],
        _10_distal_y = data["_10_distal_y"],
        _10_mesial_x = data["_10_mesial_x"],
        _10_mesial_y = data["_10_mesial_y"],
        _11_distal_x = data["_11_distal_x"],
        _11_distal_y = data["_11_distal_y"],
        _11_mesial_x = data["_11_mesial_x"],
        _11_mesial_y = data["_11_mesial_y"],
        _12_distal_x = data["_12_distal_x"],
        _12_distal_y = data["_12_distal_y"],
        _12_mesial_x = data["_12_mesial_x"],
        _12_mesial_y = data["_12_mesial_y"],
        _13_distal_x = data["_13_distal_x"],
        _13_distal_y = data["_13_distal_y"],
        _13_mesial_x = data["_13_mesial_x"],
        _13_mesial_y = data["_13_mesial_y"],
        _14_distal_x = data["_14_distal_x"],
        _14_distal_y = data["_14_distal_y"],
        _14_mesial_x = data["_14_mesial_x"],
        _14_mesial_y = data["_14_mesial_y"],
        _6L_x = data["_6L_x"],
        _6L_y = data["_6L_y"],
        _5L_x = data["_5L_x"],
        _5L_y = data["_5L_y"],
        _4L_x = data["_4L_x"],
        _4L_y = data["_4L_y"]
    )
    return Response({"msg_type": "alert-info", "msg": "Success Save Data"})



# Treatment Plan
@api_view(['POST'])
def get_treatment(request):
    case_id = request.data['case_id']

    case_data = CASE.objects.filter(id=case_id).values()
    try:
        tmp = TreatmentPlan.objects.get(id=case_id)
        t_data = TreatmentPlan.objects.filter(id=case_id).values()
        return Response(t_data[0])
    except:
        data = TreatmentPlan()
        data.id = case_id
        data.x_ray = case_data[0]["x_ray"]
        data.lower = case_data[0]["lower_png"]
        data.upper = case_data[0]["upper_png"]
        data.note = ""
        data.save()
        return Response({"x_ray": case_data[0]["x_ray"], "lower": case_data[0]["lower_png"], "upper": case_data[0]["upper_png"], "note": ""})
@api_view(['POST'])
def save_note(request):
    case_id = request.data['case_id']
    note = request.data['note']
    
    data = TreatmentPlan.objects.filter(id=case_id).update(note=note)
    # print(xray_points[0]['id'])
    return Response({"msg_type": "alert-info", "msg": "Success Save Data"})