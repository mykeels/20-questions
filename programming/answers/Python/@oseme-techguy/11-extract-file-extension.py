"""
    Solution to Extract File Extension
"""

if __name__ == '__main__':
    file_paths = [
        '/Users/mykeels/Documents/file.txt\n',
        '/Users/mykeels/Documents/file.csv\n',
        '/Users/mykeels/Music/a-whole-new-world.mp3\n',
        '/Users/mykeels/Movies/a-day-to-remember.mp4\n'
    ]

    for path in file_paths:
        splits = path.split('.')
        num_of_splits = len(splits)
        file_ext = splits[num_of_splits-1].strip()
        print(file_ext)
