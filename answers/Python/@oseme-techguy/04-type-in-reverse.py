"""
    Solution to Type in Reverse
"""

import random

def reverse_word(word):
    i = len(word)
    reversed_word = ''
    while i > 0:
        reversed_word += word[i - 1]
        i -= 1
    return reversed_word

def generate_random_word(word_length):
    letters_mask = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    random_word = ''
    i = 0
    while i < word_length:
        random_word += letters_mask[random.randint(0, 25)]
        i += 1
    return random_word

if __name__ == '__main__':
    # generate the random word
    word_length = 5
    random_word = generate_random_word(word_length)
    reverse_random_word = reverse_word(random_word)

    # display to user
    # get input from user and compare
    input_word = input('Type {word} in reverse: '.format(word=random_word))
    input_word = str(input_word).lower()

    if input_word == reverse_random_word.lower():
        print("✅\n")
    else:
        print("❌\n")