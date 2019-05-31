#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main() {
    srand(time(NULL));
    for (int i = 1; i <= 6; i++) {
        int c = rand() % 16;
        if (c < 10) {
            printf("%d", c);
        }
        else {
            if (c == 10) {
                printf("a");
            }
            else if (c == 11) {
                printf("b");
            }
            else if (c == 12) {
                printf("c");
            }
            else if (c == 13) {
                printf("d");
            }
            else if (c == 14) {
                printf("e");
            }
            else if (c == 15) {
                printf("f");
            }
        }
    }
    printf("\n");
    return 0;
}