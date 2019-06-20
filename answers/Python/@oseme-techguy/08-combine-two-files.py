"""
    Solution to Combine two files
"""

if __name__ == '__main__':
    fist_path = './data/08-combine-two-files-1.txt'
    second_path = './data/08-combine-two-files-2.txt'
    with open(fist_path, encoding='utf-8') as file1, open(second_path, encoding='utf-8') as file2:
        for line1, line2 in zip(file1, file2):
            print(line1.strip('\n') + ' ' + line2.strip('\n'))
