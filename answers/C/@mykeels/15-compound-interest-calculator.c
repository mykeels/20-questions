#include <stdio.h>

int main() {
    double principal, rate;
    int timeInYears;

    printf("Enter the Principal: ");
    scanf("%lf", &principal);

    printf("Enter the rate (%%): ");
    scanf("%lf", &rate);

    printf("Enter the time in years: ");
    scanf("%d", &timeInYears);


    for (int year = 1; year <= timeInYears; year++) {
        double interest = (principal * rate / 100);
        printf("\nYear %d\n", year);
        printf("Compound Interest: %f\n", interest);
        principal = principal + interest;
        printf("New Principal: %f\n", principal);
    }

    return 0;
}