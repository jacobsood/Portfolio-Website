from django.shortcuts import render, get_list_or_404
from .models import *

def home(request):
	context = {
		'page': 'Home',
	}
	return render(request, 'pages/index.html', context)

def about(request):
	context = {
		'page': 'About',
		'page_style': '#about.menu',
	}
	return render(request, 'pages/about.html', context)

def work(request):
	work_object = get_list_or_404(Work)
	colours = get_list_or_404(Colour)
	context = {
		'colours': colours,
		'button_hint': 'Visit Website',
		'page': 'Work',
		'page_style': '#work.menu',
		'post_list': work_object,
	}
	return render(request, 'pages/work_blog.html', context)

def blog(request):
	blog_object = get_list_or_404(Blog.objects.order_by('-date'))
	colours = get_list_or_404(Colour)
	context = {
		'colours': colours,
		'button_hint': 'View Original',
		'page': 'Blog',
		'page_style': '#blog.menu',
		'post_list': blog_object,
	}
	return render(request, 'pages/work_blog.html', context)

def contact(request):
	context = {
		'page': 'Contact',
		'page_style': '#contact.menu',
		"email": "hrithviksood1@gmail.com",
		"linkedin": "https://www.linkedin.com/in/hrithvik-sood/",
		"github": "https://github.com/hsoo6373/",
		"instagram": "https://www.instagram.com/hrithvik_sood/",
	}
	return render(request, 'pages/contact.html', context)
