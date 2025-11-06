from django.shortcuts import render


def home(request):
    return render(request, 'public/index.html')


def about(request):
    return render(request, 'public/about.html')


def contact(request):
    return render(request, 'public/contact.html')