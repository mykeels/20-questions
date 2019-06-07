/**
 * Program to convert Numbers to English Words
 * 
 * Algorithm from https://stackoverflow.com/a/3299672/7396801
 */

#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>

char* to_19[] = { "zero",  "one",   "two",  "three", "four",   "five",   "six",
        "seven", "eight", "nine", "ten",   "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
char* tens[]  = { "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};
char* denom[] = { "",
        "thousand",     "million",         "billion",       "trillion",       "quadrillion",
        "quintillion",  "sextillion",      "septillion",    "octillion",      "nonillion",
        "decillion",    "undecillion",     "duodecillion",  "tredecillion",   "quattuordecillion",
        "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion" };

char* convertNN(long val);
char* convertNNN(long val);
char* toNumber(long val);
char* concat(const char *s1, const char *s2);
int arr_len(char** arr);

// you'll need to add a number when calling to executable file 
// e.g. > .\a.exe 1000
int main(int argc, char *argv[]) {
    long val = strtol(argv[argc - 1], (char **)NULL, 10);
    printf("%zu\n", val);
    printf("%s", toNumber(val));
    return 0;
}

char* convertNN(long val) {
    if (val < 20)
        return to_19[val];
    for (long v = 0; v < arr_len(tens); v++) {
        char* dcap = tens[v];
        long dval = 20 + 10 * v;
        if (dval + 10 > val) {
            if ((val % 10) != 0)
                return concat(concat(dcap, "-"), to_19[val % 10]);
            return dcap;
        }        
   }
}

char* convertNNN(long val) {
    char* word = "";
    long rem = val / 100;
    long mod = val % 100;
    if (rem > 0) {
        word = concat(to_19[rem], " hundred");
        if (mod > 0) {
            word = concat(word, " ");
        }
    }
    if (mod > 0) {
        word = concat(word, convertNN(mod));
    }
    return word;
}

char* toNumber(long val) {
    if (val < 100) {
        return convertNN(val);
    }
    else if (val < 1000) {
        return convertNNN(val);
    }
    for (long v = 0; v < arr_len(denom); v++) {
        long didx = v - 1;
        long dval = pow(1000, v);
        if (dval > val) {
            long mod = pow(1000, didx);
            long l = val / mod;
            long r = val - (l * mod);
            char* ret = concat(concat(convertNNN(l), " "), denom[didx]);
            if (r > 0) {
                ret = concat(concat(ret, ", "), toNumber(r));
            }
            return ret;
        }
    }
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

int arr_len(char** arr) {
    int count = 0;
    for (int i = 0; arr[i] != NULL; i++) {
        count = i;
    }
    return count + 1;
}