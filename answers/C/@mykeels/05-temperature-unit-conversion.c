#include <stdio.h>

int main() {
    printf("1. Celsius to Fahrenheit\n");
    printf("2. Fahrenheit to Celsius\n");

    int option = 0;
    scanf("%d", &option);

    if (option == 1) {
        printf("Enter a celsius value: ");

        double value;
        scanf("%lf", &value);

        double fahrenheit = (value * (9.0 / 5.0)) + 32.0;

        printf("%f degrees celsius is %f degrees fahrenheit\n", value, fahrenheit);
    }
    else if (option == 2) {
        printf("Enter a fahrenheit value: ");

        double value;
        scanf("%lf", &value);

        double celsius = ((value - 32.0) * (5.0 / 9.0));

        printf("%f degrees fahrenheit is %f degrees celsius\n", value, celsius);
    }
    else {
        printf("Invalid option!\n");
    }

    return 0;
}