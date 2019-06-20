"""
    Solution to Love Calculator
"""

import math

def reduce_occurrences(occurrences_array):
    size = len(occurrences_array)
    if size <= 2:
        first = occurrences_array[0] if len(occurrences_array) > 0 else ''
        second = occurrences_array[1] if len(occurrences_array) > 1 else ''
        return '{first}{second}'.format(first=first,second=second)

    mid_section = math.floor(size/2)
    new_occurrences_str = ''
    i = 0
    while i < mid_section:
        new_occurrences_str += str(int(occurrences_array[i]) + int(occurrences_array[size - 1 - i]))
        i += 1

    if size % 2 == 1: # size is odd
        new_occurrences_str += str(occurrences_array[i])

    return list(new_occurrences_str)


if __name__ == '__main__':
    while True:
        first_name = input('Enter the first name: ')
        first_name = str(first_name)

        second_name = input('Enter the second name: ')
        second_name = str(second_name)

        joined_names = '{name1}loves{name2}' \
            .format(name1=first_name,name2=second_name) \
            .lower()

        occurrences_array = []

        i = 0
        while i < len(joined_names):
            occurrences_array.append(joined_names.count(joined_names[i]))
            i += 1

        print(occurrences_array)
        result = reduce_occurrences(occurrences_array)
        while type(result) is not str:
            result = reduce_occurrences(result)

        print('\nThe love percentage is {percentage}%\n'.format(percentage=result))

