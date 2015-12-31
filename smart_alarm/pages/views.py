from django.shortcuts import render
from django.core.context_processors import csrf
from django.shortcuts import render_to_response

# Create your views here.
def index(request):
    return render_to_response('index.html')


def map(request):
    return render(request, 'map.html')
