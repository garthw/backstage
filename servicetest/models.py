from django.db import models


class NumberRequest(models.Model):
    datetime = models.DateTimeField(auto_now=True)
    value = models.IntegerField(default=0)
    number = models.IntegerField(default=0)
