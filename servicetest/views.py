from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .utils import compute_difference


def difference(request):
	number = request.GET.get('number', '')
	stuff = compute_difference(number)




	return HttpResponse("You're looking at the number parameter: {}, {}".format(number, stuff))
