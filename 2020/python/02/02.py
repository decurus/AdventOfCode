inputFile = open('input')
lines = inputFile.readlines()

correctPasswords = []

for line in lines:
    splitLine = line.split(':')
    password = splitLine[1] ##password

    policySplit = splitLine[0].split(' ')
    policy = policySplit[1] ##policy

    occuranceseSplit = policySplit[0].split('-')

    firstChar = int(occuranceseSplit[0]) #min
    secChar = int(occuranceseSplit[1]) #max

    if password[firstChar] == password[secChar]:
        continue

    if password[firstChar] == policy or password[secChar] == policy:
        correctPasswords.append(lines)


#print(correctPasswords)

print(len(correctPasswords))
