package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())

	fmt.Printf("#%s%s%s\n",
		strconv.FormatInt(int64(rand.Intn(256)), 16),
		strconv.FormatInt(int64(rand.Intn(256)), 16),
		strconv.FormatInt(int64(rand.Intn(256)), 16))
}
