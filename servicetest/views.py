from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

import json

from .utils import compute_difference
from .models import NumberRequest


def difference(request):
    number = request.GET.get('number', '')
    if int(number) > 100:
        return HttpResponse(json.dumps({
            "Error": "Number greater than 100"
            }), mimetype='application/json')

    result = compute_difference(number)

    instance = NumberRequest.objects.create(number=number, value=result)
    occurences = NumberRequest.objects.filter(number=number).count()

    json_obj = json.dumps({
        "datetime": str(instance.datetime),
        "value": instance.value,
        "number": instance.number,
        "occurrences": occurences
        })

    return HttpResponse(json_obj, mimetype='application/json')
