from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

from .models import *
from django.contrib import messages
from django.http import JsonResponse
import json

def home(request):
    context = {}
    return render(request, 'main/home.html', context)


def getData(request): 
    if request.method == "POST":
        print("Getting a POST request from frontend...")
        data = json.loads(request.body.decode("utf-8"))
        requestedProductID = data["product_id"]
        print("This was clicked on the frontend: " + requestedProductID)
        return JsonResponse("Recieved this on backend: " + requestedProductID, safe=False)
    else:
        print("Getting a GET request.")
        return HttpResponse ("GET request mili h.")