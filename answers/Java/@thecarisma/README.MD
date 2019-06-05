

## Generating Random Number 

To generate random number in answers the java.util.Random is used. It enable the generation of a number 
between two values. To generate a number between two number the format below is used 

```
Random random = new Random();
int high = 100, low = 10;
int randomNumber = random.nextInt(high - low) + low;
```

the snippet above generates any random number between 10 and 100