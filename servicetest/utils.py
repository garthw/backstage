import re


def compute_difference(number):
	output = range(int(number) + 1)
	sum_of_squares = 0
	squares_of_sum = sum(output)**2

	for o in output:
		sum_of_squares += o**2

	difference = squares_of_sum - sum_of_squares
	return difference
