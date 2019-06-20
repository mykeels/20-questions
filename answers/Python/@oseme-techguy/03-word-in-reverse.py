"""
    Solution to Word in Reverse
"""

if __name__ == '__main__':
    while True:
        word = input('Enter a word: ')
        word = str(word)

        i = len(word)
        reversed_word = ''
        while i > 0:
            reversed_word += word[i - 1]
            i -= 1
        print('{reversed_word}\n'.format(reversed_word=reversed_word))
