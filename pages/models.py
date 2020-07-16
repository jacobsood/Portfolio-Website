from django.db import models
from django.contrib.postgres.fields import ArrayField

class Colour(models.Model):
    shade = models.CharField(max_length=30)
    background_colour = models.CharField(max_length=30)
    colour = models.CharField(max_length=30)
    
    def __str__(self):
        return self.shade

class WorkBlogField(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(auto_now=False, auto_now_add=False)
    descriptions = models.TextField()
    image = models.ImageField(upload_to="images/work_blog", default="images/work_blog/ComingSoon.png")
    
    def __str__(self):
        return self.title
    
    class Meta:
        abstract = True
        ordering = ['-date']

class Tool(models.Model):
    tool = models.CharField(max_length=30)
    
    def __str__(self):
        return self.tool

class Blog(WorkBlogField):
    location = models.CharField(max_length=40)

class Work(WorkBlogField):
    purpose = models.CharField(max_length=255)
    tools = models.ManyToManyField(Tool)
    video = models.FileField(upload_to="videos", default="videos/default.mp4")
    
class Link(models.Model):
    button_text = models.CharField(max_length=50, default="Visit Website")
    url = models.URLField(default="www.hrithviksood.me")
        
    class Meta:
        abstract = True

class BlogLink(Link):
    blog = models.ForeignKey(
        Blog,
        on_delete=models.CASCADE,
    )
    
    def __str__(self):
        return str(self.blog) + " - " + self.button_text
        
class WorkLink(Link):
    work = models.ForeignKey(
        Work,
        on_delete=models.CASCADE,
    )
    
    def __str__(self):
        return str(self.work) + " - " + self.button_text