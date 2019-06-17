"""
    Solution to Attendance Calculator
"""

if __name__ == '__main__':
    filepath = './answers/Python/@oseme-techguy/data/19-attendance-register.txt'
    with open(filepath, encoding='utf-8') as file:
        for line in file:
            response = input('Is {name} in class [yes/no]: '.format(name=line.strip('\n')))
            response = response if response is not None else ''

            while response != 'yes' and response != 'no':
                print('Invalid Entry! Please enter response again.\n')
                response = input('Is {name} in class [yes/no]: '.format(name=line.strip('\n')))
                response = response if response is not None else ''

