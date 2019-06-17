"""
    Solution to Multiplication Table
"""

if __name__ == '__main__':
    num_of_rows = 12
    num_of_columns = 12

    row_index = 1
    column_index = 2
    table = ''
    while True:
        if row_index > num_of_rows:
            break

        # Do printing of table here
        table += str(row_index * column_index) + '\t'
        column_index += 1 # increment column counters

        if column_index > num_of_columns:
            column_index = 2 # reset back to start index
            row_index += 1 # increment row counter
            table += '\n'

    print(table)