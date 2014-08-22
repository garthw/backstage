import json


def compute_difference(number):
	output = range(int(number) + 1)
	sum_of_squares = 0
	squares_of_sum = sum(output)**2

	for o in output:
		sum_of_squares += o**2

	difference = squares_of_sum - sum_of_squares
	return difference

def construct_json(number, result):
    json_obj = json.dumps({
            "datetime":current_datetime,
            "value": solution,
            "number": number,
            "occurrences": occurrences
        })

def sum_occurences(number):
	occurences = NumberRequest.objects.filter(number=number).count()
	return occurrences
