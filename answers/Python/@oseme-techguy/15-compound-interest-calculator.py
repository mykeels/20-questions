"""
    Solution to Compound Interest Calculator
"""

if __name__ == '__main__':

    principal = input('Enter the Principal: ')
    # type checking here
    try:
        principal = float(principal)
    except ValueError:
        print('Invalid principal Amount')
        exit(0)

    rate = input('Enter the rate (%%): ')
    # type checking here
    try:
        rate = float(rate)
    except ValueError:
        print('Invalid rate Amount')
        exit(0)
    
    years = input('Enter the time in years: ')
    # type checking here
    try:
        years = int(years)
    except ValueError:
        print('Invalid number of years')
        exit(0)
    
    # wanna avoid underflow errors here
    if principal <= 0 or rate <= 0 or years <= 0:
        print('Invalid principal, rate or number of years')
        exit(0)
    
    year = 1
    while year <= years:
        interest = (principal * rate) / 100
        print('\nYear {year}'.format(year=year))
        print('Compound Interest: {interest}'.format(interest=interest))
        principal += interest
        print('New Principal: {principal}'.format(principal=principal))
        year += 1
    print('')
