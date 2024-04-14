#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

int arr_len(char** arr);
char** str_split(char* a_str, const char a_delim);

int main() {
    char txt[] = "/Users/mykeels/Documents/file.txt\n"
                "/Users/mykeels/Documents/file.csv\n"
                "/Users/mykeels/Movies/a-day-to-remember.mp4\n"
                "/Users/mykeels/Music/a-whole-new-world.mp3";
    char** lines = str_split(txt, '\n');

    for (int i = 0; lines[i] != NULL; i++) {
        char** tokens = str_split(lines[i], '.');
        printf("%s\n", tokens[arr_len(tokens) - 1]);
    }
    return 0;
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