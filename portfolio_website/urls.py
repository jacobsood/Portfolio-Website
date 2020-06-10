"""portfolio_website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/

Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

from pages import views

urlpatterns = [
	path('', views.home, name='home'),
	path('about/', views.home, name='about'),
	path('work/', views.work, name='work'),
	path('blog/', views.blog, name='blog'),
	path('contact/', views.contact, name='contact'),
	path('', views.home, name='email'),
	path('', views.home, name='linkedin'),
	path('', views.home, name='github'),
	path('', views.home, name='bitbucket'),
	path('', views.home, name='instagram'),
    path('admin/', admin.site.urls),
]
