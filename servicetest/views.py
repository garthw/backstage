from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .utils import compute_difference
from .models import NumberRequest


def difference(request):
    number = request.GET.get('number', '')
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
