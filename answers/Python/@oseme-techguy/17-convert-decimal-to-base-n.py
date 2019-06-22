"""
    Solution to Decimal-to-n-Base Converter
"""

if __name__ == '__main__':

    value = input('Enter the decimal value you wish to convert: ')
    # type checking here
    try:
        value = int(value)
    except ValueError:
        print('Invalid value to convert')
        exit(0)

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

    converted_value = ''
    while value > 0:
        converted_value += str(value % base) # get the reminder
        value = int(value/base) # get the number without reminder

    converted_value = converted_value[::-1] # reverse the reminders to get the result
    print('{value} base 10 = {converted} base {base}\n'.format(
        value=value,
        base=base,
        converted=converted_value
    ))
