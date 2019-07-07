package main

import "fmt"

var (
	numbers = []string{"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"}
	tens    = []string{"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"}
	large   = []string{"thousand", "million", "billion"}
)

func main() {
	var input int
	for {
		fmt.Print("Enter number: ")
		fmt.Scanf("%d", &input)
		fmt.Printf("%d becomes %s\n", input, toNumberValue(input))
	}
}

func toNumberValue(num int) (word string) {
	if num < 100 {
		word = convertNN(num)
		return
	}
	if num < 1000 {
		word = convertNNN(num)
		return
	}
	t := 0
	for num > 0 {
		if num != 0 {
			str := convertNNN(num % 1000)
			if t > 0 {
				str = str + " " + large[t-1]
			}
			if word == "" {
				word = str
			} else {
				word = str + ", " + str
			}
		}
		num /= 1000
		t++
	}
	return
}

func convertNN(num int) (word string) {
	if num < 20 {
		word = numbers[num]
		return
	}
	for i := 0; i < len(tens); i++ {
		d := tens[i]
		val := 20 + 10*i
		if val+10 > num {
			if num%10 != 0 {
				rem := numbers[num%10]
				word = d + "-" + rem
				return
			}
			word = d
			return
		}
	}
	return
}

func convertNNN(num int) (word string) {
	n := num / 100
	rem := num % 100
	if n > 0 {
		word = numbers[n] + " " + "hundred"
		if rem > 0 {
			word = word + " and"
		}
	}
	if n > 0 {
		word = word + " " + convertNN(rem)
	}
	return
}
