from django.contrib import admin
from django.urls import path, re_path
from api import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/get_case_id', views.get_case_id),
    path("api/file_upload_xray", views.file_upload_xray),
    path("api/file_upload_lower", views.file_upload_lower),
    path("api/file_upload_upper", views.file_upload_upper),

    path('api/get_xray', views.get_xray),
    path('api/get_lower_png', views.get_lower_png),
    path('api/get_upper_png', views.get_upper_png),
    path('api/save_xray_points', views.save_xray_points),
    path('api/save_lower_points', views.save_lower_points),
    path('api/save_upper_points', views.save_upper_points),
    
    path('api/get_treatment', views.get_treatment),
    path('api/save_note', views.save_note),

    path('', TemplateView.as_view(template_name='index.html')),

]