#include <stdio.h>

int main() {
    while (1) {
        printf("Enter a salary amount: ");

        double salary = 0;
        scanf("%lf", &salary);

        if (salary < 0) {
            printf("Invalid Amount");
        }
        else if (salary < 50000) {
            printf("Basic Earner\n");
        }
        else if (salary < 200000) {
            printf("Mid Earner\n");
        }
        else {
            printf("High Earner\n");
        }
    }
    return 0;
}