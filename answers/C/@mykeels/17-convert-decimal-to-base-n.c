#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <string.h>

char* toBaseN(int decimalValue, int n);

int main() {
    while (1) {
        int n, value;

        printf("Enter the decimal value you wish to convert: ");
        scanf("%d", &value);
        
        printf("Enter the value of base n: ");
        scanf("%d", &n);

        printf("%d base 10 = %s base %d\n\n", value, toBaseN(value, n), n);
    }
    return 0;
}

char* toBaseN(int decimalValue, int n) {
    assert(n <= 10);
    
    char* sResult = malloc (sizeof (char) *128);

    int position = 0;
    int div = decimalValue;
    int rem = 0;

    while (div > 0) {
        div = div / n;
        rem = decimalValue % n;
        sResult[position] = rem + '0';
        position++;
        decimalValue = div;
    }
    
    char* result = malloc (sizeof (char) *(position + 1));

    for (int i = position - 1; i >= 0; i--) {
        result[position - 1 - i] = sResult[i];
    }
    result[position] = '\0';

    return result;
}