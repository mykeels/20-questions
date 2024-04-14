#include <stdio.h>
#include <string.h>

int main() {
    char firstName[50], lastName[50];
    int age = 0;
    
    printf("Enter your first name: ");
    scanf("%s", firstName);
    
    printf("Enter your last name: ");
    scanf("%s", lastName);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("\nWelcome, %s %s (%d)\n", firstName, lastName, age);
    
    return 0;
}