# 20 Questions

As per [this blog post](https://medium.com/@mykeels/20-questions-a047fa9d3856), I hope to provide 20 questions for beginners, and intermediate programmers, that will help in achieving some level of confidence in skills with programming languages and frameworks.

![20 questions](https://repository-images.githubusercontent.com/189217345/64a5ab80-8234-11e9-84f2-a4b1140229e3)

Each question will require a practical solution, and the concepts you're expected to have mastered by the time you accept it, will be given in detail.

> This is not an list of algorithm exercises.

See [answers](./answers).

Find the questions below:

## 1. Name Concatenation

Request the user's first name, last name and age. Print out `Welcome, <First-Name> <Last-Name> (<Age>)` in a new line. [See Variants](./programming/01-name-concatenation.md#variants).

## 2. Lottery

Ask the user to press any key.

Display any 3 random space-separated digits between 0-9 e.g. `6 2 7`.

If any of them is `7`, output `"Congratulations!"`.

Else, output `"Try again! Better luck next time."`.

Repeat. [See Variants](./programming/02-lottery.md#variants).

## 3. Word in Reverse

Ask the user to enter a word.

Print out the word in reverse.

Repeat. [See Variants](./programming/03-word-in-reverse.md#variants).

## 4. Type in Reverse

Output a random word. Ask the user to type in the reverse.

- If the user is correct, output ✅

- Else, output ❌

Repeat. [See Variants](./programming/04-type-in-reverse.md#variants).

## 5. Temperature Unit Conversion

Output:

```txt
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius

Enter an option:
```

- If the user enters `1`, ask the user to `"Enter a celsius value:"`.

- Else, ask the user to `"Enter a Fahrenheit value:"`.

Convert the entered value to celsius or fahrenheit accordingly. [See More](./programming/05-temperature-unit-conversion.md).

## 6. Multiplication Table

Using a for/while loop, write a program that prints out a simple multiplication from 2 - 12. E.g.

```txt
2   3   4   5   6   7   8   9   10  11  12
4   6   8   10  12  14  16  18  20  22  24
6   9   12  15  18  21  24  27  30  33  36
...
24  36  48  60  72  84  96  108 120 132 144
```

[See Variants](./programming/06-multiplication-table.md#variants).

## 7. Read line by line

Write a program to read a txt file, line by line, and output each line to the screen. [See Variants](./programming/07-read-line-by-line.md)

## 8. Combine Two Files

Write a program to read two txt files, line by line, concatenate each line pair for both files, and output the concatenated result to the screen. [See more](./programming/08-combine-two-files.md)

## 9. RGB Color Generator

Write a program that will output a random RGB color e.g. `rgb(252, 160, 72)`.

[See More](./programming/09-rgb-color-generator.md).

## 10. Hex Color Generator

Write a program that will output a random RGB color e.g. `#fca048`.

[See More](./programming/10-hex-color-generator.md).

## 11. Extract File Extension

Write a program to read a list of file paths, and output the extension for each.

[See More](./programming/11-extract-file-extension).

## 12. Salary Classifier

Ask the user to enter a salary amount.

- If the salary is < 50,000, output `"Basic Earner"`.

- Else, if the salary is less than 200,000, output `"Mid Earner"`.

- Else, output `"High Earner"`.

[See More](./programming/12-salary-classifier.md).

## 13. Tax Classifier

Ask the user to enter a salary amount.

- If the salary is < 50,000, output `Tax: 5 / 100 * salary`.

- Else, if the salary is less than 200,000, output `Tax: 10 / 100 * salary`.

- Else, output `Tax: 15 / 100 * salary`.

[See More](./programming/13-tax-classifier.md).

## 14. Number in Words

Ask the user to enter a number.

Print out the entered number in words.

E.g. `30,456 becomes "Thirty thousand, four hundred and fifty six"`.

[See More](./programming/14-number-in-words.md)

## 15. Compound Interest Calculator

Request the Principal.

Request the Rate.

Request the Time in Years.

Calculate and output the simple interest. (`P * R * T / 100`).

For each year, calculate and output the compound interest.

[See More](./programming/15-compound-interest-calculator.md).

## 16. Convert to Decimal

Write a program to convert from base n to decimal (base 10).

Request the value of n.

Request the number value (integer).

Convert to base 10, and output the result.

[See More](./programming/16-convert-to-decimal.md)

## 17. Convert Decimal to Base n

Write a program to convert from decimal (base 10) to base n.

Request the value of n.

Request the decimal value.

Convert to base n, and output the result.

[See More](./programming/17-convert-decimal-to-base-n.md)

## 18. Simple CGPA calculator

Write a program to read a CSV file of student IDs, names, and scores, and for each student, output their name, ID, average score and CGPA in the following format:

```txt
<name> (<id>): <average-score> <cgpa>
```

[See more](./programming/18-simple-cgpa-calculator).

## 19. Attendance Register

Read student names, line by line, from a file.

For each name, ask if the student is in class.

E.g. `Is Bisi in class? [yes/no]`

Let the user input either `yes` or `no`.

[See More](./programming/19-attendance-register.md)

## 20. Love Calculator

Write a love calculator program that calculates a love percentage, using two names. [See More](./programming/20-love-calculator.md).

looking to contribute? checkout the [contributing guide](contributing.md)