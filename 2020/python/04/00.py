import re
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
    
    pairs = []

    for field in includedFields:
        pairs.append(field.split(':'))
        includedFieldIndecies.append(pairs[0])

    for mandatoryField in mandatoryFields:
        valid = False
        included = False
        currentPair = []
        
        for pair in pairs:
            if mandatoryField in pair:
                included = True
                currentPair = pair
                break

        if included == False:
            break

        key = pair[0]
        value = pair[1]

        if 'byr' in key and int(value) >= 1920 and int(value) <= 2002:
            valid = True

        elif 'iyr' in key and int(value) >= 2010 and int(value) <= 2020:
            valid = True

        elif 'eyr' in key and int(value) >= 2020 and int(value) <= 2030:
            valid = True

        elif 'hgt' in key and ('in' in value or 'cm' in value):
            if 'in' in value and value.index('in') != len(value)-2 or 'cm' in value and value.index('cm') != len(value)-2:
                continue
            height = value
            height = height.replace('in','')
            height = height.replace('cm','')
            heightint = int(height)
            if 'cm' in value and heightint >= 150 and heightint <= 193:
                valid = True
            elif 'in' in value and heightint >=59 and heightint <= 76:
                valid = True

        elif 'hcl' in key and re.search('#[0-9a-f]{6}', value) != None:
            valid = True

        elif 'ecl' in key and value in ['amb', 'blu', 'brn', 'gry' ,'grn' ,'hzl', 'oth']:
            valid = True

        elif 'pid' in key and len(value) == 9:
            valid = True
        
        if valid == False:
            break


    if valid == False or included == False:
        continue

    validPassports.append(passport)
    
    

for passport in validPassports:
    print(passport)

print('Valid Passports: ' + str(len(validPassports)))