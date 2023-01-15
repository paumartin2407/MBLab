from django.urls import path
from . import views

urlpatterns = [
    path('hello', views.helloWorld, name='hello'),
    path('home', views.home, name='home'),
    path('about', views.about, name='about'),
    path('portfolio', views.portfolio, name='portfolio'),
    path('team', views.team, name='team'),
    path('outreach', views.outreach, name='outreach'),
    path('contact', views.contact, name='contact'),
    path('positions', views.positionsHtml, name='positions'),

    path('myapp/question/<int:question_id>/', views.detail),
    path('myapp/getQuestions/', views.questions), 
    path('myapp/getPubHL/', views.getPubHL),
    path('myapp/getAllPub/', views.getAllPub),
    path('myapp/getLabCollabs/', views.getLabCollabs),
    path('myapp/getLabMembers/', views.getLabMembers),
    path('myapp/getPositions/', views.getPositions),
]