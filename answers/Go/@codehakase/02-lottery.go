package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	var a, b, c int
	for {
		reader := bufio.NewReader(os.Stdin)
		fmt.Print("Press Enter key to continue...")
		_, _ = reader.ReadString('\n')
		a = rand.Intn(10)
		b = rand.Intn(10)
		c = rand.Intn(10)
		fmt.Printf("%d %d %d\n", a, b, c)
		if a == 7 || b == 7 || c == 7 {
			fmt.Println("Congratulations!!\n")
		} else {
			fmt.Println("Try again! Better luck next time.\n")
		}
	}
}
