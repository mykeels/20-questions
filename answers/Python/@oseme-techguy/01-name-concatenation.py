"""
    Solution to Name Concatenation
"""

if __name__ == '__main__':
    first_name = input('Enter your first name: ')
    first_name = str(first_name)

    last_name = input('Enter your last name: ')
    last_name = str(last_name)

    age = input('Enter your age: ')
    age = int(age)

    print('\nWelcome, {first_name} {last_name} ({age})\n'.format(
        first_name=first_name,
        last_name=last_name,
        age=age
    ))
