from django.shortcuts import render

def home(request):
	context = {}
	return render(request, 'pages/index.html', context)

def about(request):
	context = {}
	return render(request, 'pages/about.html', context)

def work(request):
	context = {}
	return render(request, 'pages/work_blog.html', context)

def blog(request):
	context = {}
	return render(request, 'pages/work_blog.html', context)

def contact(request):
	context = {}
	return render(request, 'pages/contact.html', context)
