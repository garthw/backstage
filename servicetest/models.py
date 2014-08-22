import datetime

from django.db import models
from django.utils import timezone


class NumberRequest(models.Model):
	datetime = models.DateTimeField(auto_now=True)
	value = models.IntegerField(default=0)
	number = models.IntegerField(default=0)
	occurrences = models.IntegerField(default=0)

