#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <string.h>

char* removeTrailingNewline(char* line);

int main() {
    FILE* fp;
    char buffer[255];

    fp = fopen("./answers/C/@mykeels/data/19-attendance-register.txt", "r");

    while(fgets(buffer, 255, (FILE*) fp)) {
        printf("Is %s in class [yes/no]: ", removeTrailingNewline(buffer));

        int isValid = 0;

        while (isValid == 0) {
            char reply[16];
            scanf("%s", reply);

            isValid = strcasecmp(reply, "yes") == 0 || strcasecmp(reply, "no") == 0;

            if (isValid) break;

            printf("Invalid Entry! Please enter response again.\n");
            printf("Is %s in class [yes/no]: ", removeTrailingNewline(buffer));
        }
    }

    fclose(fp);
}

/** it is necessary to remove the trailing newline, 
 *  because gets automatically appended by fgets(...)
 */
char* removeTrailingNewline(char* line) {
    int i = 0;
    char* lineResized = malloc (sizeof (char) *50);

    while (line[i] != '\n' && line[i] != '\0') {
        lineResized[i] = line[i];
        i++;
    }
    if (lineResized[i - 1] == '\r') {
        lineResized[i - 1] = '\0';
    }   

    return lineResized;
}