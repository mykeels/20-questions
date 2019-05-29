# Simple CGPA Calculator

Write a program to read a CSV file of student IDs, names, and scores, and for each student, output their name, ID, average score and CGPA in the following format:

```txt
<name> (<id>): <average-score> <cgpa>
```

## CGPA algorithm

1. Divide each score by 20.

2. Find the average of the results obtained above, to get the CGPA.

## Sample CSV File

```csv
id,name,math,chemistry,science,physics,geography
st001,abdul,83,47,95,47,83
st002,gafar,90,76,76,67,95
st003,korede,95,56,48,70,96
st004,taomu,84,86,85,74,100
st005,sheffield,35,86,45,32,80
st006,kevin,64,60,43,54,70
st007,paul,48,56,75,34,90
st008,daniels,66,77,55,62,13
st009,tommy,54,36,85,81,92
st010,fielders,34,26,35,34,20
```