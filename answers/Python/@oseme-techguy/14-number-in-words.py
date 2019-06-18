"""
    Solution to Numbers in Words
    Based off this Algorithm: https://stackoverflow.com/a/3299672/7396801
"""

import math

zero_to_nineteen_map = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
]

tens_map = [
    'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
]

denom_map = [
    '' ,'thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion',
    'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion',
    'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion',
]

def hundred_to_words(number):
    if (number < 20):
        return zero_to_nineteen_map[number]
    for index,value in enumerate(tens_map):
        dval = 20 + 10 * index
        if (dval + 10 > number):
            if ((number % 10) != 0):
                return value + "-" + zero_to_nineteen_map[number % 10]
            return value


def thousand_to_words(number):
    word = ''
    rem = math.floor(number / 100)
    mod = number % 100
    if rem > 0:
        word = zero_to_nineteen_map[rem] + ' hundred'
        if mod > 0:
            word = word + ' '
    if mod > 0:
        word = word + hundred_to_words(mod)
    return word


def number_to_words(number):
    if number < 100:
        return hundred_to_words(number)

    if number < 1000:
        return thousand_to_words(number)

    for index,value in enumerate(denom_map):
        didx = index - 1
        dval = math.floor(float(math.pow(1000, index)))

        if (dval > number):
            mod = int(float(math.pow(1000, didx)))
            
            l = math.floor(number / mod)
            r = number - (l * mod)
            ret = thousand_to_words(l) + ' ' + denom_map[didx]
            if r > 0:
                ret = ret + ', ' + number_to_words(r)
            return ret


if __name__ == '__main__':

    while True:
        number = input('Enter a number: ')

        # type checking here
        try:
            number = int(number)
        except ValueError:
            number = -1

        if number < 0: # corner case
            print('Invalid Amount')
            exit(0)

        english_number = number_to_words(number)
        print(english_number + '\n')

