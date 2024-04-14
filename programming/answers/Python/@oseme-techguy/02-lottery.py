"""
    Solution to Lottery
"""

import random

if __name__ == '__main__':
    while True:
        input('Press any key: ')

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
