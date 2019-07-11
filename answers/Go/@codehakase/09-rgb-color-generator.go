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
	for {
		reader := bufio.NewReader(os.Stdin)
		fmt.Print("Press enter to continue...")
		reader.ReadString('\n')
		fmt.Printf("%s\n", genRGBValues())
	}
}

func genRGBValues() string {
	var r, g, b int
	r = rand.Intn(255)
	g = rand.Intn(255)
	b = rand.Intn(255)
	return fmt.Sprintf("rgb(%d, %d, %d)", r, g, b)
}
