#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main() {
    srand(time(NULL));
    printf("rgb(%d, %d, %d)", rand() % 256, rand() % 256, rand() % 256);
    return 0;
}