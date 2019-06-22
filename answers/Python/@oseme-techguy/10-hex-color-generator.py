"""
    Solution to Random HEX Color Generator
"""

import random

if __name__ == '__main__':
    i = 0
    hex_mask = '0ABCDEF'
    generated_color = ''
    while i < 6:
        pixel = random.randint(1, 16)
        generated_color += str(pixel if pixel < 9 else hex_mask[pixel-10])
        i += 1

    print('#{color}\n'.format(color=generated_color))
