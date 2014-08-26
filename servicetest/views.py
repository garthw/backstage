from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.views.decorators.csrf import csrf_exempt

import json

from .utils import compute_difference
from .models import NumberRequest

# Pass token instead of using exempt
@csrf_exempt
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

def form(request):
    response = render_to_response('servicetest/servicetest.html', locals(),
                                  RequestContext(request))
    return response
