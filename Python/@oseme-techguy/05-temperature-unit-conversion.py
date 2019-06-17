"""
    Solution to Temperature Unit Conversion
"""

if __name__ == '__main__':
    selection = input(
        'Select a Conversion Type Below:\n' +
        '\t1. Celsius to Fahrenheit\n' +
        '\t2. Fahrenheit to Celsius\n'
    )
    # type checking here
    selection = 0 if type(selection) is not int else int(selection)

    if selection == 1:
        value = input('Enter a celsius value: ')
        value = float(value)
        fahrenheit = (value * (9.0 / 5.0)) + 32.0
        print('{celsius} degrees celsius is {fahrenheit} degrees fahrenheit\n'.format(
            celsius=value,
            fahrenheit=fahrenheit
        ))
    elif selection == 2:
        value = input('Enter a fahrenheit value: ')
        value = float(value)
        celsius = ((value - 32.0) * (5.0 / 9.0))
        print('{fahrenheit} degrees fahrenheit is {celsius} degrees celsius\n'.format(
            fahrenheit=value,
            celsius=celsius
        ))
    else:
        print('Invalid Option Selected!\n')
