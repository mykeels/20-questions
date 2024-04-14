#include <stdio.h>
#include <string.h>
#include <math.h>

int toBase10(char* value, int base);

int main() {
    while (1) {
        int n;
        char value[128];
        
        printf("Enter the value of base n: ");
        scanf("%d", &n);

        printf("Enter the base %d value you wish to convert: ", n);
        scanf("%s", value);

        printf("%s base %d = %d base 10", value, n, toBase10(value, n));
    }
    return 0;
}

int toBase10(char* value, int base) {
    int sum = 0;
    int count = 0;
    for (int i = strlen(value) - 1; i >= 0; i--) {
        sum += (value[i] - '0') * (int)pow((double)base, (double)count);
        count++;
    }
    return sum;
}