inputFile = open('input')
lines = inputFile.readlines()

passports = ['']
currentPassport = 0
validPassports = []

mandatoryFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'] #not mandatory: cid
numMandatoryFields = len(mandatoryFields)

for line in lines:
    if line == '\n':
        currentPassport += 1
        passports.append('')
        continue

    passports[currentPassport] += line.replace('\n', ' ')

for passport in passports:
    includedFields = passport.split(' ')
    includedFieldIndecies = []
    includedMandatories = 0

    for field in includedFields:
        includedFieldIndecies.append(field.split(':')[0])

    for mandatoryField in mandatoryFields:
        if mandatoryField in includedFieldIndecies:
            includedMandatories += 1

    if includedMandatories == numMandatoryFields:
        validPassports.append(passport)


print('Valid Passports: ' + str(len(validPassports)))

