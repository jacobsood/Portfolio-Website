from djongo import models
from django import forms

class Tool(models.Model):
    tool = models.CharField(max_length=30)
    
    class Meta:
        abstract = True


class ToolForm(forms.ModelForm):
    class Meta:
        model = Tool
        fields = (
            'tool'
        )

class Description(models.Model):
    description = models.TextField()
    
    class Meta:
        abstract = true


class DescriptionForm(forms.ModelForm)
    class Meta:
        model = Description
        fields = (
            'description'
        )
    
class Links(models.Model):
    link = models.URLField()
    
    class Meta:
        abstract = true


class LinksForm(forms.ModelForm):
    class Meta:
        model = Links
        field = (
            'link'
        )


class Blog(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(auto_now=False, auto_now_add=False)
    location = models.CharField(max_length=40)
    
    descriptions = models.EmbeddedModelField(
        model_container=Description
        model_form_class=DescriptionForm
    )
    
    links = models.EmbeddedModelField(
        model_container=Links
        model_form_class=LinksForm
    )
    
    objects = models.DjongoManager()


class Work(models.Model):
    title = models.CharField(max_length=255)
    purpose = models.TextField()
    
    tools = models.EmbeddedModelField(
        model_container=Tool,
        model_form_class=ToolForm
    )
    
    descriptions = models.EmbeddedModelField(
        model_container=Description
        model_form_class=DescriptionForm
    )
    
    links = models.EmbeddedModelField(
        model_container=Links
        model_form_class=LinksForm
    )
    
    objects = models.DjongoManager()


class About(models.Model):
    pass

class Index(models.Model):
    pass