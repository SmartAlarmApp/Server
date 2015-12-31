from django.http import HttpResponse
from urlparse import urlparse
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return HttpResponse("Hello, this is our API")

@csrf_exempt
def register_wakeup_time(request):
    msg = "Register wake up time"
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except ValueError, e:
            msg = "Error! Can't parse arguments as JSON"
        else:
            args = ['coords', 'breakfastTime', 'wakeUpTime']
            if all([arg in data.keys() for arg in args]):
                print data
                msg = "Registered!"
            else:
                msg = "Error! Wrong format"
    return HttpResponse(msg)
