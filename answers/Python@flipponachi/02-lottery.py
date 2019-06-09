#Solution to second question
import random

number_exists = True

while number_exists:
    user_value = input("Welcome, kindly press a key ")

    lottery_values = random.sample(range(0, 10), 3)
    print(lottery_values)
    if 7 in lottery_values:
        number_exists = False
        print("Congratulations")
    else:
        number_exists = True
        print("Try again! Better luck next time.")
