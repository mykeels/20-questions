"""
    Solution to Read Line-by-Line
"""

if __name__ == '__main__':
    filepath = './answers/Python/@oseme-techguy/data/07-read-line-by-line.txt'
    with open(filepath, encoding='utf-8') as file:
        for line in file:
            print(line.strip('\n'))