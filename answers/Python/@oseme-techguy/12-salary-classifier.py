"""
    Solution to Salary Classifier
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
            print('Basic Earner\n')
        elif salary < 200000:
            print('Mid Earner\n')
        else:
            print('High Earner\n')
