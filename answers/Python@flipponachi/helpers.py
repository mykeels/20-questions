import datetime
#Calculate year of birth
def yearOfBirthCalculator(age):
    if age < 1:
        raise ArithmeticError(f"Age cannot be zero, {age}")
        
    currentYear = datetime.datetime.now()
    year = currentYear.year - age
    return year

#Check for empty strings from user input
def checkEmptyString(stringVariable):
    if stringVariable == "":
        return False
    
    return True

#Check if string input is a valid number
def isValidNumber(stringInt):
    try:
        int(stringInt)
        return True
    except ValueError:
        return False

#Check for string length
def isStringLengthValid(stringValue):
    if len(stringValue) < 2:
        return False
    
    return True