from django.shortcuts import render

def home(request):
	context = None
	return render(request, 'pages/index.html', context)

def work(request):
	context = None
	return render(request, 'pages/work.html', context)

def blog(request):
	context = None
	return render(request, 'pages/blog.html', context)

def contact(request):
	context = None
	return render(request, 'pages/contact.html', context)
