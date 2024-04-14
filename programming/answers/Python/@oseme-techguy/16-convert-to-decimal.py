"""
    Solution to Base-to-Decimal Converter
"""

if __name__ == '__main__':

    base = input('Enter the value of base n: ')
    # type checking here
    try:
        base = int(base)
    except ValueError:
        print('Invalid base entered')
        exit(0)

    # wanna avoid underflow errors here
    if base < 2:
        print('Invalid base!!! Base cannot be less than 2!')
        exit(0)

    value = input('Enter the base {base} value you wish to convert: '.format(base=base))
    # type checking here
    try:
        value = str(value)
    except ValueError:
        print('Invalid value to convert')
        exit(0)
    
    converted_value = 0
    power = 1 # Initialize power of base 
    for i in range(len(str(value)) - 1, -1, -1):
        # no digit of number must be greater than base
        if int(value[i]) > base:
            print('Invalid value to convert')
            exit(0)

        converted_value += int(value[i]) * power 
        power = power * base # increase as we move to end of number

    print('{value} base {base} = {converted} base 10\n'.format(
        value=value,
        base=base,
        converted=converted_value
    ))
