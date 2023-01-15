from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.core import serializers
import json
from .models import Question, PubHL, labCollabs, otherLabMembers, currentLabMember, pub, positions
import logging


# Create your views here.

def helloWorld(request):
    return HttpResponse('Hello World!!!!!')

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def portfolio(request):
    context = {}
    ls = otherLabMembers.objects.all().values('name', 'text')
    context['otherLabMembersLs'] = ls
    logging.getLogger().info(ls)
    return render(request, "portfolio.html", context)

def team(request):
    return render(request, 'team.html')

def contact(request):
    return render(request, 'contact.html')

def outreach(request):
    return render(request, 'outreach.html')

def positionsHtml(request):
    return render(request, 'positions.html')

def detail(request, question_id):
    q = Question.objects.get(id=question_id).question_text
    return HttpResponse("Question %s is: %s" % (str(question_id), q))

def questions(request):
    if request.method == 'GET':
        ls = Question.objects.all()
        data = serializers.serialize('json', ls)
        return HttpResponse(data, content_type="application/json")
    return JsonResponse(dict(), safe=False, status=404)

def getPubHL(request):
    if request.method=='GET':
        ls = PubHL.objects.all()
        data = serializers.serialize('json', ls)
        return JsonResponse(data, safe=False, status=200)
    return JsonResponse(dict(), safe=False, status=404)

def getAllPub(request):
    if request.method=='GET':
        ls = pub.objects.all()
        data = serializers.serialize('json', ls)
        return JsonResponse(data, safe=False, status=200)
    return JsonResponse(dict(), safe=False, status=404)

def getLabCollabs(request):
    if request.method=='GET':
        ls = labCollabs.objects.all()
        data = serializers.serialize('json', ls)
        return JsonResponse(data, safe=False, status=200)
    return JsonResponse(dict(), safe=False, status=404)

def getLabMembers(request):
    if request.method=='GET':
        ls = currentLabMember.objects.all()
        data = serializers.serialize('json', ls)
        return JsonResponse(data, safe=False, status=200)
    return JsonResponse(dict(), safe=False, status=404)

def getPositions(request):
    if request.method=='GET':
        ls = positions.objects.all()
        data = serializers.serialize('json', ls)
        return JsonResponse(data, safe=False, status=200)
    return JsonResponse(dict(), safe=False, status=404)

