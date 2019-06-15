import helpers
user_choice = input("Hello, welcome. \n "
     + "Press 1 for Celsius to Fahrenheit Conversion "+

     "\n Press 2 for Fahrenheit to Celsius ")

if not helpers.checkEmptyString(user_choice):
    user_choice = input("Hello, welcome. \n "
     + "Press 1 for Celsius to Fahrenheit Conversion "+

     "\n Press 2 for Fahrenheit to Celsius ")

if user_choice == '1':
    temp_value = input("Type in Celsius Value to convert")
    print(f"Fahrenheit value: {helpers.convertToFahrentheit(temp_value)}F")
if user_choice == '2':
    temp_value = input("Type in the Fahrenheit value to Convert ")
    print(f"Celsius value: {helpers.convertToCelsius(temp_value)}F")

