from django.contrib import admin
from django.urls import path, re_path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/get_case_id', views.get_case_id),
    path("api/file_upload_xray", views.file_upload_xray),
    path("api/file_upload_lower", views.file_upload_lower),
    path("api/file_upload_upper", views.file_upload_upper),

    path('api/get_xray', views.get_xray),

]