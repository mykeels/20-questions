#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>
#include "utils/uthash.h"

#define HASH_FIND_CHAR(head,findint,kv) HASH_FIND(hh,head,findint,sizeof(char),kv)
#define HASH_ADD_CHAR(head,intfield,kv) HASH_ADD(hh,head,intfield,sizeof(char),kv)
#define HASH_REPLACE_CHAR(head,intfield,kvv, kv) HASH_REPLACE(hh,head,intfield,sizeof(char),kvv,kv)

char* concat(const char *s1, const char *s2);
char* processOccurrences(char *occurences);

struct KeyValue {
    char key;
    int value;
    UT_hash_handle hh;
};

struct KeyValue *charMap = NULL;

struct KeyValue* addCharMap(char c) {
    struct KeyValue* kv;

    HASH_FIND_CHAR(charMap, &c, kv);

    if (kv == NULL) {
        kv = (struct KeyValue*)malloc(sizeof(struct KeyValue));
        kv->key = c;
        kv->value = 1;
        HASH_ADD_CHAR(charMap, key, kv);
        return kv;
    }
    else {
        kv->value = kv->value + 1;
        HASH_REPLACE_CHAR(charMap, key, kv, kv);
        return kv;
    }
}

struct KeyValue *findCharMap(char c) {
    struct KeyValue *kv;
    HASH_FIND_CHAR(charMap, &c, kv);
    return kv;
}

int main() {
    while (1) {
        char name1[256];
        char name2[256];

        printf("Enter the first name: ");
        scanf("%s", name1);

        printf("Enter the second name: ");
        scanf("%s", name2);

        char* name1and2 = concat(concat(name1, "loves"), name2);
        // printf("%s\n", name1and2);
                
        for (int i = 0; i < strlen(name1and2); i++) {
            char c = name1and2[i];
            struct KeyValue* kv = addCharMap(c);
            // printf("%c %d\n", kv->key, kv->value);
        }

        char* occurences = malloc(sizeof(char) *(strlen(name1and2) + 1));

        for (int i = 0; i < strlen(name1and2); i++) {
            // printf("%c", name1and2[i]);
            struct KeyValue* kv = findCharMap(name1and2[i]);
            occurences[i] = kv->value + '0';
        }

        printf("The love percentage is %s%%\n\n", processOccurrences(occurences));

        charMap = NULL;
    }
    return 0;
}

char* processOccurrences(char *occurences) {
    char* oConcat = malloc(sizeof(char) *strlen(occurences));
    for (int i = 0, j = strlen(occurences) - 1; j >= i; i++, j--) {
        char sumConcat[3];
        int sum = (occurences[i] - '0');
        if (i != j) {
            sum += (occurences[j] - '0');
        }
        sprintf(sumConcat, "%d", sum);
        strcpy(oConcat, concat(oConcat, sumConcat));
        // printf("%d, %d => %d\n", i, j, sum);
    }

    if (strlen(oConcat) > 2) {
        // printf("%s\n", oConcat);
        return processOccurrences(oConcat);
    }
    else {
        return oConcat;
    }
    return oConcat;
}

// https://stackoverflow.com/a/8465083/7396801
char* concat(const char *s1, const char *s2)
{
    const size_t len1 = strlen(s1);
    const size_t len2 = strlen(s2);
    char *result = malloc(len1 + len2 + 1); // +1 for the null-terminator
    // in real code you would check for errors in malloc here
    memcpy(result, s1, len1);
    memcpy(result + len1, s2, len2 + 1); // +1 to copy the null-terminator
    return result;
}