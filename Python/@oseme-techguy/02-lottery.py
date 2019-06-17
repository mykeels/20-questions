"""
    Solution to Lottery
"""

import random

if __name__ == '__main__':
    selected_value = input('Press any key: ')
    selected_value = int(selected_value)

    lottery_values = random.sample(range(0, 10), 3)
    print('{first} {second} {third}'.format(
        first=lottery_values[0],
        second=lottery_values[1],
        third=lottery_values[2]
    ))
    if 7 in lottery_values:
        print('Congratulations!\n')
    else:
        print('Try again! Better luck next time.\n')
