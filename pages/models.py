from django.db import models
from django.contrib.postgres.fields import ArrayField

class Tool(models.Model):
    tool = models.CharField(max_length=30)

class Blog(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(auto_now=False, auto_now_add=False)
    location = models.CharField(max_length=40)
    descriptions = ArrayField(models.TextField())
    links = ArrayField(models.URLField())

class Work(models.Model):
    title = models.CharField(max_length=255)
    purpose = models.TextField()
    tools = models.ManyToManyField(Tool)
    descriptions = ArrayField(models.TextField())
    links = ArrayField(models.URLField())

class About(models.Model):
    pass

class Contact(models.Model):
    pass