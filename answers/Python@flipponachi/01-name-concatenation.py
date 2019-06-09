#Solution to First task about Name concatenation

#import external methods for exercise
import helpers

first_Name = input("Hello, What's your first name? ")

while(not helpers.checkEmptyString(first_Name)):
    first_Name = input("We didn't get that before. Input your name please we beg ")


last_Name = input("Okay. What's your last name? ")
while(not helpers.checkEmptyString(last_Name)):
    last_Name = input("Just like before we didn't get your last name. Input your last name please we beg ")

age = input(f"Almost done {first_Name}, how old are you? ")
while(not helpers.checkEmptyString(age) or not helpers.isValidNumber(age)):
    age = input("We didn't get that before. Input your age please we beg ")


yearOfBirth = 0
try:
    yearOfBirth = helpers.yearOfBirthCalculator(int(age))
except Exception as error:
    print(error)


print(f"Welcome, {first_Name} {last_Name} {yearOfBirth}")




