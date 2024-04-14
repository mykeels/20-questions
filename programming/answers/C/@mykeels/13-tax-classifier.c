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
            printf("Tax %f\n", salary * 5 / 100);
        }
        else if (salary < 200000) {
            printf("Tax %f\n", salary * 10 / 100);
        }
        else {
            printf("Tax %f\n", salary * 15 / 100);
        }
    }
    return 0;
}