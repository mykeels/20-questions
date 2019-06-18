"""
    Solution to Love Calculator
"""

import math

def reduce_hash_set(hash_set):
    size = len(hash_set)
    if size <= 2:
        first = hash_set[0] if len(hash_set) > 0 else ''
        second = hash_set[1] if len(hash_set) > 1 else ''
        return '{first}{second}'.format(first=first,second=second)

    mid_section = math.floor(size/2)
    new_hash_set = []
    i = 0
    while i < mid_section:
        new_hash_set.append(hash_set[i] + hash_set[size - 1 - i])
        i += 1

    if size % 2 == 1: # size is odd
        new_hash_set.append(hash_set[i+1])

    return new_hash_set

if __name__ == '__main__':
    first_name = input('Enter the first name: ')
    first_name = str(first_name)

    second_name = input('Enter the second name: ')
    second_name = str(second_name)

    joined_names = '{name1}loves{name2}' \
        .format(name1=first_name,name2=second_name) \
        .lower()

    hash_map = {}

    i = 0
    while i < len(joined_names):
        if joined_names[i] not in hash_map:
            hash_map[joined_names[i]] = 1
        else:
            hash_map[joined_names[i]] += 1
        i += 1

    result = reduce_hash_set(list(hash_map.values()))
    while type(result) is not str:
        result = reduce_hash_set(result)

    print('\nThe love percentage is {percentage}%\n'.format(percentage=result))
    # print(hash_map.values())
    # print(reduce_hash_set(list(hash_map.values())))
