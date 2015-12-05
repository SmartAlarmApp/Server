from __future__ import unicode_literals

from django.db import models

class WakeupInfo(models.Model):
    origin = models.CharField(max_length=50)
    destination  = models.CharField(max_length=50)
    arrival_time = models.TimeField(auto_now=False, auto_now_add=False)
    breakfast_time = models.TimeField(auto_now=False, auto_now_add=False)
    wakeup_time = models.TimeField(auto_now=False, auto_now_add=False)
