from django.db import models
from django.contrib.postgres.fields import ArrayField

class Video(models.Model):
    title = models.CharField(max_length=255)
    src = models.FileField(upload_to="videos", default="videos/default.mp4")
    
    def __str__(self):
        return self.title

class Image(models.Model):
    caption = models.CharField(max_length=255)
    src = models.ImageField(upload_to="images/work_blog", default='images/work_blog/ComingSoon.png')
    
    def __str__(self):
        return self.caption

class Colour(models.Model):
    shade = models.CharField(max_length=30)
    background_colour = models.CharField(max_length=30)
    colour = models.CharField(max_length=30)
    
    def __str__(self):
        return self.shade

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
    )
    video = models.OneToOneField(
        Video,
        on_delete=models.CASCADE,
    )
    
    def __str__(self):
        return self.title
