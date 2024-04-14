"""
    Solution to Tax Classifier
"""

if __name__ == '__main__':

    while True:
        salary = input('Enter a salary amount: ')

        # type checking here
        try:
            salary = float(salary)
        except ValueError:
            salary = -1

        if salary < 0: # corner case
            print('Invalid Amount')
        elif salary < 50000:
            print('Tax {tax}\n'.format(tax=(salary * 5/100)))
        elif salary < 200000:
            print('Tax {tax}\n'.format(tax=(salary * 10/100)))
        else:
            print('Tax {tax}\n'.format(tax=(salary * 15/100)))
