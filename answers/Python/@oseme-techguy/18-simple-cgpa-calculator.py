"""
    Solution to Simple CGPA Calculator
"""

if __name__ == '__main__':
    filepath = './data/18-simple-cgpa-calculator.csv'
    with open(filepath, encoding='utf-8') as file:
        for index, line in enumerate(file):
            if index == 0:
                continue

            csv_parts = line.strip('\n').split(',')
            total_score = int(csv_parts[2]) + int(csv_parts[3]) + \
                int(csv_parts[4]) + int(csv_parts[5]) + int(csv_parts[6])
            average = total_score / 5
            cgpa = average / 20 # cgpa = average / 20

            print("{name} ({id}): {average} {cgpa}\n".format(
                name=csv_parts[1],
                id=csv_parts[0],
                average=average,
                cgpa=cgpa

            ))
