#include <stdio.h>

int main() {
    FILE* fp;
    char buffer[255];

    fp = fopen("./answers/C/@mykeels/data/07-read-line-by-line.txt", "r");

    while(fgets(buffer, 255, (FILE*) fp)) {
        printf("%s", buffer);
    }

    fclose(fp);
}