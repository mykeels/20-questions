"""
    Solution to Random RGB Color Generator
"""

import random

if __name__ == '__main__':
    print('rgb({red},{green},{blue})\n'.format(
        red=random.randint(0, 256),
        green=random.randint(0, 256),
        blue=random.randint(0, 256)
    ))
