from rest_framework import serializers
from .models import User, CASE, X_RAY, LOWER, UPPER

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'document', 'phone', 'registrationDate')
        
class CASESerializer(serializers.ModelSerializer):
    class Meta:
        model = CASE
        fields = ('id', 'upper_stl', 'lower_stl', 'x_ray', 'upper_png', 'lower_png')
        
class X_RAYSerializer(serializers.ModelSerializer):
    class Meta:
        model = X_RAY
        fields = ('id', 'x_ray', 'upper_jaw_1x', 'upper_jaw_1y', 'upper_jaw_2x', 'upper_jaw_2y', 'upper_teeth_1x', 'upper_teeth_1y', 'upper_teeth_2x', 'upper_teeth_2y', 'lower_jaw_1x', 'lower_jaw_1y', 'lower_jaw_2x', 'lower_jaw_2y', 'lower_teeth_1x', 'lower_teeth_1y', 'lower_teeth_2x', 'lower_teeth_2y')
        
class LOWERSerializer(serializers.ModelSerializer):
    class Meta:
        model = UPPER
        fields = ('id', 'upper_png', '_1_distal_x', '_1_distal_y', '_1_mesial_x', '_1_mesial_y', '_2_distal_x', '_2_distal_y', '_2_mesial_x', '_2_mesial_y', '_3_distal_x', '_3_distal_y', '_3_mesial_x', '_3_mesial_y', '_4_distal_x', '_4_distal_y', '_4_mesial_x', '_4_mesial_y', '_5_distal_x', '_5_distal_y', '_5_mesial_x', '_5_mesial_y', '_6_distal_x', '_6_distal_y', '_6_mesial_x', '_6_mesial_y', '_7_distal_x', '_7_distal_y', '_7_mesial_x', '_7_mesial_y', '_8_distal_x', '_8_distal_y', '_8_mesial_x', '_8_mesial_y', '_9_distal_x', '_9_distal_y', '_9_mesial_x', '_9_mesial_y', '_10_distal_x', '_10_distal_y', '_10_mesial_x', '_10_mesial_y', '_11_distal_x', '_11_distal_y', '_11_mesial_x', '_11_mesial_y', '_12_distal_x', '_12_distal_y', '_12_mesial_x', '_12_mesial_y', '_13_distal_x', '_13_distal_y', '_13_mesial_x', '_13_mesial_y', '_14_distal_x', '_14_distal_y', '_14_mesial_x', '_14_mesial_y', '_6L_x', '_6L_y', '_5L_x', '_5L_y', '_4L_x', '_4L_y')
        
class UPPERSerializer(serializers.ModelSerializer):
    class Meta:
        model = LOWER
        fields = ('id', 'lower_png', '_1_distal_x', '_1_distal_y', '_1_mesial_x', '_1_mesial_y', '_2_distal_x', '_2_distal_y', '_2_mesial_x', '_2_mesial_y', '_3_distal_x', '_3_distal_y', '_3_mesial_x', '_3_mesial_y', '_4_distal_x', '_4_distal_y', '_4_mesial_x', '_4_mesial_y', '_5_distal_x', '_5_distal_y', '_5_mesial_x', '_5_mesial_y', '_6_distal_x', '_6_distal_y', '_6_mesial_x', '_6_mesial_y', '_7_distal_x', '_7_distal_y', '_7_mesial_x', '_7_mesial_y', '_8_distal_x', '_8_distal_y', '_8_mesial_x', '_8_mesial_y', '_9_distal_x', '_9_distal_y', '_9_mesial_x', '_9_mesial_y', '_10_distal_x', '_10_distal_y', '_10_mesial_x', '_10_mesial_y', '_11_distal_x', '_11_distal_y', '_11_mesial_x', '_11_mesial_y', '_12_distal_x', '_12_distal_y', '_12_mesial_x', '_12_mesial_y', '_13_distal_x', '_13_distal_y', '_13_mesial_x', '_13_mesial_y', '_14_distal_x', '_14_distal_y', '_14_mesial_x', '_14_mesial_y', '_6L_x', '_6L_y', '_5L_x', '_5L_y', '_4L_x', '_4L_y')

