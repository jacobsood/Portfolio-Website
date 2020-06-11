from django.shortcuts import render

def home(request):
	context = {}
	return render(request, 'pages/index.html', context)

def about(request):
	context = {'breadcrumb_title': 'about.'}
	return render(request, 'pages/about.html', context)

def work(request):
	context = {'breadcrumb_title': 'work.'}
	return render(request, 'pages/work.html', context)

def blog(request):
	context = {'breadcrumb_title': 'blog.'}
	return render(request, 'pages/blog.html', context)

def contact(request):
	context = {'breadcrumb_title': 'contact.'}
	return render(request, 'pages/contact.html', context)
