#include <stdio.h>

int main() {
    for (int i = 1; i <= 12; i++) {
        for (int j = 2; j <= 12; j++) {
            printf("%d\t", i * j);
        }
        printf("\n");
    }
    return 0;    
}