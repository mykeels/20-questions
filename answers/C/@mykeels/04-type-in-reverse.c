#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <string.h>

const int WORD_LEN = 5;

char* reverseWord();
char* generateWord();

int main() {
    srand(time(NULL));

    while (1) {
        char* word = generateWord();
        printf("Type %s in reverse: ", word);

        char typedWord[WORD_LEN * 2];
        scanf("%s", typedWord);

        if (strcmp(reverseWord(word), typedWord) == 0) {
            printf("✅\n");
        }
        else {
            printf("❌\n", word, typedWord);
        }
    }
}

char* reverseWord(char* word) {
    char* wordInReverse = malloc (sizeof (char) *strlen(word));

    for (int i = strlen(word) - 1; i >= 0; i--) {
        wordInReverse[strlen(word) - i - 1] = word[i];
    }

    return wordInReverse;
}

char* generateWord() {
    char* word = malloc (sizeof (char) *WORD_LEN);

    for (int i = 0; i < WORD_LEN; i++) {
        word[i] = 65 + (rand() % 25);
    }

    return word;
}