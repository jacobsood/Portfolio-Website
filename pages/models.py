from django.db import models
from django.contrib.postgres.fields import ArrayField

class Image(models.Model):
    caption = models.CharField(max_length=255)
    src = models.ImageField(upload_to="images/work_blog", default='images/work_blog/default.jpg')
    
    def __str__(self):
        return self.caption

class Colour(models.Model):
    background_colour = models.CharField(max_length=30)
    colour = models.CharField(max_length=30)
    
    def __str__(self):
        return self.colour

class Tool(models.Model):
    tool = models.CharField(max_length=30)
    
    def __str__(self):
        return self.tool

class Blog(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(auto_now=False, auto_now_add=False)
    location = models.CharField(max_length=40)
    descriptions = ArrayField(models.TextField())
    links = ArrayField(models.URLField())
    image = models.OneToOneField(
        Image, 
        on_delete=models.CASCADE,
        primary_key=True,
    )
    
    def __str__(self):
        return self.title

class Work(models.Model):
    title = models.CharField(max_length=255)
    purpose = models.TextField()
    tools = models.ManyToManyField(Tool)
    descriptions = ArrayField(models.TextField())
    links = ArrayField(models.URLField())
    image = models.OneToOneField(
        Image, 
        on_delete=models.CASCADE,
        primary_key=True,
    )
    
    def __str__(self):
        return self.title

class About(models.Model):
    pass

class Contact(models.Model):
    pass