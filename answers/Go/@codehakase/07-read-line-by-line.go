package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
	"time"
)

func main() {
	file, err := os.OpenFile("./data/07-read-line-by-line.txt", os.O_RDONLY, os.ModePerm)
	if err != nil {
		log.Fatalf("failed to open file: %v", err)
		os.Exit(1)
	}
	defer file.Close()
	scanSimple(file)
	//scanLinesToFile(file)
	//delayedScan(file)
}

func scanSimple(file *os.File) {
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text()) // read line
	}

	if err := scanner.Err(); err != nil {
		log.Fatalf("failed to scan lines: %v", err)
		os.Exit(1)
	}
}

func delayedScan(file *os.File) {
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text()) // read line
		time.Sleep(time.Second * 1)
	}

	if err := scanner.Err(); err != nil {
		log.Fatalf("failed to scan lines: %v", err)
		os.Exit(1)
	}
}

func scanLinesToFile(file *os.File) {
	scanner := bufio.NewScanner(file)
	newFile, err := os.Create("./read-line-to-file.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer newFile.Close()
	for scanner.Scan() {
		_, err := io.WriteString(newFile, fmt.Sprintf("%s\n", scanner.Text()))
		if err != nil {
			log.Fatal(err)
		}
		err = newFile.Sync()
	}
	if err := scanner.Err(); err != nil {
		log.Fatalf("failed to scan lines: %v", err)
		os.Exit(1)
	}
}
