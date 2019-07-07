package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
)

func main() {
	var (
		averageScore, totalCGPA float64
	)
	file, err := os.Open("./data/18-simple-cgpa-calculator.csv")
	if err != nil {
		log.Fatalf("failed to open csv file: %v", err)
	}
	defer file.Close()
	reader := csv.NewReader(file)
	for {
		record, err := reader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}
		var sum, cgpasum float64
		for pos := 2; pos < len(record); pos++ {
			score, _ := strconv.ParseFloat(record[pos], 64)
			sum += score
			cgpasum += (score / 20)
		}
		averageScore = sum / 5.0
		totalCGPA = cgpasum / 5.0
		fmt.Printf("%s (%s): %f %f\n", record[1], record[0], averageScore, totalCGPA)
	}
}
