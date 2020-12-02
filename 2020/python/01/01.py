inputFile = open('input')
lines = inputFile.readlines()
print(lines)
pairFound = False
pair = [0,0]

for line in range(len(lines)):
    number = int(lines[line])
    print(number)
    for second in range(line, len(lines)):
        secondNumber = int(lines[second])
        if number + secondNumber == 2020:
            print("pair found")
            pair[0] = number
            pair[1] = secondNumber
            pairFound = True
            print(pair)
            break
    if pairFound == True:
        break

print(pair)
print("Solution: " + str(pair[0]*pair[1]))
