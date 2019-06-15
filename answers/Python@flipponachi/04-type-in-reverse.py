import helpers

current_word = helpers.listOfRandomWords()
print(current_word)

user_input = input("Type out the reverse word. ")

continue_game = True
while not helpers.checkEmptyString(user_input):
    user_input = input("We insist, type out the reverse word ")

while not helpers.isStringLengthValid(user_input):
    user_input = input("We insist on the reverse")


reversed_word = helpers.reverseString(current_word)
while continue_game:
    if reversed_word.lower() != user_input.lower():
       print("❌")
       user_input = input("Try again, please :) ")
       continue_game = True
    elif reversed_word.lower() == user_input.lower():
        continue_game = False
        print("✅")

    

