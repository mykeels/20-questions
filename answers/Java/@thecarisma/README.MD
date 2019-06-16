
This ReadMe contains some minor explanation for some answers that appear tricky, confusing 
or just need further explanation. 

## Running Answers 

The folder has been configured to open in Netbeans IDE and IntelliJ. 
To build on IntelliJ you have to manually configure the build path change the 
build path to any folder in your file system 

```
File -> Project Structure -> Project Settings (Project) -> Project compiler output 
```

 - To run any of the answers in Netbeans IDE open the file in the editor and press `Shift + F6`
 - To run any of the answers in IntelliJ IDE select one of the 20 answers configuration in the 
run configuration list and click run to execute

## Generating Random Number 

To generate random number in answers the java.util.Random is used. It enable the generation of a number 
between two values. To generate a number between two number the format below is used 

```
Random random = new Random();
int high = 100, low = 10;
int randomNumber = random.nextInt(high - low) + low;
```

the snippet above generates any random number between 10 and 100


## Mark and Reset in BufferedReader

In question 19 [N19AttendanceRegister](./N19AttendanceRegister.java) the buffered reader is used to read 
the names line by line and ask if the person is in class. According to the question only the response 
`yes` and `no` is allowed else the question is asked again since the BufferedReader read line by line and 
forward only it a bit tricky to go back to keep the current line in the stream instead of introducing extra 
logic such as array or combining Reader the `mark()` and `reset()` method in the BufferedReader reader itself 
is used , the two method usage is very tricky the mark is used to note the current position in the stream 
which means if a line is marked before resetting it will continue to move forward so the position has to be 
marked right after a successful response. The mark does not go back to previous line instead it mark the 
previous line so when the current response is wrong it request a response on the current line again until 
it marks the current line as passed  

## Multiple Condition in for loop

Some C derived languages allows the combination of condition in for..loop i.e it allows  more than one operation 
to be evaluated and executed in the loop condition. For example the following, to count a number from ascending  
order and descending order using single instruction in the loop will require the creation of more than one 
for..loop block 

```
int numbers[] = {1,2,3,4,5,6,7,8,9,0};
for (int a = 0; a < numbers.length; a++) {
	//numbers[a] hold number in ascending order
}

for (int a = numbers.length - 1; a >= 0 ; a--) {
	//numbers[a] hold number in descending order
}
```

By combining the instruction in the two for..loop above the same functionality can be achieved. 

```
int numbers[] = {1,2,3,4,5,6,7,8,9,0};
for (int a = 0, b = numbers.length - 1; a < numbers.length && b >= 0; a++, b++) {
	//numbers[a] hold number in ascending order
	//numbers[b] hold number in descending order
}
```

By combining the expression into one for..loop it make the code faster and reduce allocation of memory, even though 
the for..loop blocks is Garbage Collected sometime Garbage collection  itself is costly.

The combination loop was used in Question 20 [N20LoveCalculator](./N20LoveCalculator.java)