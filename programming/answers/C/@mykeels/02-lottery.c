#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main() {
    srand(time(NULL));

    while (1) {
        printf("Press any key: ");
        getchar();

        int a = rand() % 10;
        int b = rand() % 10;
        int c = rand() % 10;

        printf("%d %d %d\n", a, b, c);

        if (a == 7 || b == 7 || c == 7) {
            printf("Congratulations!\n");
        }
        else {
            printf("Try again! Better luck next time.\n");
        }
    }
    
    return 0;
}