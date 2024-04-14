#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* removeTrailingNewline(char* line);

int main() {
    FILE* fp1;
    FILE* fp2;
    char buffer1[255], buffer2[255];

    fp1 = fopen("./answers/C/@mykeels/data/08-combine-two-files-1.txt", "r");
    fp2 = fopen("./answers/C/@mykeels/data/08-combine-two-files-2.txt", "r");

    while(fgets(buffer1, 255, (FILE*) fp1) && fgets(buffer2, 255, (FILE*) fp2)) {
        printf("%s %s", removeTrailingNewline(buffer1), buffer2);
    }

    fclose(fp1);
    fclose(fp2);

    return 0;
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
    lineResized[i - 1] = '\0';

    return lineResized;
}