# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-05 12:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wakeupinfo',
            name='destination',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='wakeupinfo',
            name='origin',
            field=models.CharField(max_length=50),
        ),
    ]
