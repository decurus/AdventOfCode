inputFile = open('input')
lines = inputFile.readlines()

correctPasswords = []

for line in lines:
    splitLine = line.split(':')
    password = splitLine[1] ##password

    policySplit = splitLine[0].split(' ')
    policy = policySplit[1] ##policy

    occuranceseSplit = policySplit[0].split('-')

    minOccur = int(occuranceseSplit[0]) #min
    maxOccur = int(occuranceseSplit[1]) #max

    occurances = 0

    for i in password:
        if i == policy:
            occurances+=1

    if occurances >= minOccur and occurances <= maxOccur:
        correctPasswords.append(line)

#print(correctPasswords)

print(len(correctPasswords))
