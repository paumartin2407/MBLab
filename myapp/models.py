import datetime

from django.db import models
from django.utils import timezone
from . import validators

# Create your models here.

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        #return self.question_text
        return "%s %s" % (self.question_text, str(self.pub_date))
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text

class PubHL(models.Model):
    journalName = models.CharField(max_length=50)
    year = models.IntegerField(validators=[validators.validate_year])
    Ref = models.CharField(max_length=100)
    URL = models.CharField(max_length=200)
    tittle = models.TextField()
    photo = models.ImageField(upload_to="photosPubHL")
    def __str__(self):
        return "%s %s" % (self.journalName, str(self.year))
    class Meta:
        verbose_name = 'Publication Highlight'
        verbose_name_plural = 'Publication Highlights'


class pub(models.Model):
    fatText = models.TextField()
    thinText = models.TextField()
    URL = models.CharField(max_length=200, blank=True)
    class Meta:
        verbose_name = 'Publication'
        verbose_name_plural = 'All Publications'


class currentLabMember(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=20)
    photo = models.ImageField(upload_to="currentLabMembers")
    def __str__(self):
        return "%s" % (self.name)
    class Meta:
        verbose_name = 'Current Lab Member'
        verbose_name_plural = 'Current Lab Members'

class labCollabs(models.Model):
    name = models.CharField(max_length=50)
    place = models.CharField(max_length=60)
    URL = models.CharField(max_length=200, blank=True)
    def __str__(self):
        return "%s" % (self.name)
    class Meta:
        verbose_name = 'Lab Collaboration'
        verbose_name_plural = 'Lab Collaborations'
    

class otherLabMembers(models.Model):
    name = models.CharField(max_length=50)
    text = models.TextField()
    def __str__(self):
        return "%s" % (self.name)
    class Meta:
        verbose_name = 'Past Lab Member'
        verbose_name_plural = 'Past Lab Members'






