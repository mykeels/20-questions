package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
)

func main() {
	file, err := os.Open("./data/19-attendance-register.txt")
	if err != nil {
		log.Fatalf("failed to open file: %+v", err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	attendanceOutput, err := os.Create("./attendance-output.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer attendanceOutput.Close()
	var input string
	for scanner.Scan() {
		name := scanner.Text()
		fmt.Printf("Is %s in class? [yes/no]: ", name)
		fmt.Scanf("%s", &input)
		if input != "yes" && input != "no" {
			fmt.Println("Invalid entry! Please enter response again.")
			// TODO: reset buffer
		}
		var err error
		if input == "yes" {
			_, err = io.WriteString(attendanceOutput, fmt.Sprintf("%s \t\u2705\n", name))
			if err != nil {
				log.Fatal(err)
			}
		} else if input == "no" {
			_, err = io.WriteString(attendanceOutput, fmt.Sprintf("%s \t\u274C\n", name))
			if err != nil {
				log.Fatal(err)
			}
		}
		err = attendanceOutput.Sync()
	}
	if err := scanner.Err(); err != nil {
		log.Fatalf("failed to scan lines: %v", err)
		os.Exit(1)
	}
}
