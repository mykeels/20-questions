#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

int arr_len(char** arr);
char** str_split(char* a_str, const char a_delim);

int main() {
    FILE* fp;
    char buffer[255];

    fp = fopen("./answers/C/@mykeels/data/18-simple-cgpa-calculator.csv", "r");

    int lineIndex = 0;
    while(fgets(buffer, 255, (FILE*) fp)) {
        if (lineIndex > 0) {
            char** tokens = str_split(buffer, ',');
            double sum = 0;
            double cgpaSum = 0;

            for (int scoreIndex = 2; scoreIndex <= 6; scoreIndex++) {
                int score = strtod(tokens[scoreIndex], NULL);
                sum += score;
                cgpaSum += score / 20;
            }

            double avg = sum / 5.0;
            double cgpa = cgpaSum / 5.0;

            printf("%s (%s): %f %f\n", tokens[1], tokens[0], avg, cgpa);
        }
        
        lineIndex++;
    }

    fclose(fp);
}

int arr_len(char** arr) {
    int count = 0;
    for (int i = 0; arr[i] != NULL; i++) {
        count = i;
    }
    return count + 1;
}

// https://stackoverflow.com/a/9210560/7396801
char** str_split(char* a_str, const char a_delim)
{
    char** result    = 0;
    size_t count     = 0;
    char* tmp        = a_str;
    char* last_comma = 0;
    char delim[2];
    delim[0] = a_delim;
    delim[1] = 0;

    /* Count how many elements will be extracted. */
    while (*tmp)
    {
        if (a_delim == *tmp)
        {
            count++;
            last_comma = tmp;
        }
        tmp++;
    }

    /* Add space for trailing token. */
    count += last_comma < (a_str + strlen(a_str) - 1);

    /* Add space for terminating null string so caller
       knows where the list of returned strings ends. */
    count++;

    result = malloc(sizeof(char*) * count);

    if (result)
    {
        size_t idx  = 0;
        char* token = strtok(a_str, delim);

        while (token)
        {
            assert(idx < count);
            *(result + idx++) = strdup(token);
            token = strtok(0, delim);
        }
        assert(idx == count - 1);
        *(result + idx) = 0;
    }

    return result;
}