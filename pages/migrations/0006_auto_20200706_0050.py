# Generated by Django 3.0.7 on 2020-07-05 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_auto_20200706_0048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='src',
            field=models.ImageField(default='pages/static/images/work_blog/default.jpg', upload_to='images/'),
        ),
    ]
