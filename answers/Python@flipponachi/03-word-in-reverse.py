#SOlution to 3 question

import helpers

user_input = input("Hello, type a word and see some magic :) ")

while(not helpers.checkEmptyString(user_input)):
    user_input = input("We insist, give us a word")

while(not helpers.isStringLengthValid(user_input)):
    user_input = input("Length is too short, type something longer :) ")

#split string into a list, create an empty list 
converted_string = list(user_input)
converted_string.reverse()

reverse_string = ""

for i in converted_string:
    reverse_string += i


print(reverse_string)