package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var firstPerson, secondPerson string
	for {
		fmt.Println("Enter your name: ")
		fmt.Scanf("%s\n", &firstPerson)
		fmt.Println("Enter your crush's name: ")
		fmt.Scanf("%s\n", &secondPerson)
		freq := fmt.Sprintf("%sloves%s", firstPerson, secondPerson)
		f := getCharFrequency(freq)
		percentage := calculate(f)
		fmt.Printf("The love percentage is %s%%\n", percentage)
	}
}

func calculate(freq []int) string {
	// register start and end indexes
	start := 0
	end := len(freq) - 1
	var sumArr []int
	for start < end {
		sum := freq[start] + freq[end]
		sumStr := strconv.Itoa(sum)
		if len(sumStr) == 2 {
			pts := []rune(sumStr)
			sumArr = append(sumArr, int(pts[0]), int(pts[1]))
		} else {
			sumArr = append(sumArr, freq[start]+freq[end])
		}
		start++
		end--
	}
	if len(freq)%2 == 1 { // push middle item to end of array
		sumArr = append(sumArr, freq[start])
	}
	if len(sumArr) == 2 {
		return strings.Trim(strings.Replace(fmt.Sprint(sumArr), " ", "", -1), "[]")
	}
	return calculate(sumArr)
}

func getCharFrequency(char string) []int {
	var (
		arr    []int
		arrMap map[string]int
	)
	arrMap = make(map[string]int)
	strArr := []rune(char)
	for i := 0; i < len(char); i++ {
		r := string(strArr[i])
		if _, ok := arrMap[r]; !ok {
			arrMap[r] = 1
		} else {
			arrMap[r]++
		}
	}
	for _, freq := range arrMap {
		arr = append(arr, freq)
	}
	return arr
}
