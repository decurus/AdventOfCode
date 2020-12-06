inputFile = open('input')
lines = inputFile.readlines()
rowRange = [0,127]
colRange = [0,7]
seatIDs = []

def getRange(description, currentRange):
    letter = int(description[:1])
    newRangeLength = ((currentRange[1] - currentRange[0])+1)/2
    if letter == 0:
        newMin = currentRange[0]
        newMax = currentRange[0]+(newRangeLength-1)
    else:
        newMin = currentRange[0] + newRangeLength
        newMax = currentRange[1]

    newRange = [newMin, newMax]

    if len(description) > 1:
        returnRange = getRange(description[1:], newRange)
    
    else:
        returnRange = newRange
    
    return returnRange

def findMax(array):
    max = 0
    for element in array:
        if element > max:
            max = element
    return max


for line in lines:
    rowDescription = ''
    colDescription = ''

    for letter in line:
        if letter == 'F' or letter == 'B':
            rowDescription += letter
        elif letter == 'L' or letter == 'R':
            colDescription += letter

    rowDescription = rowDescription.replace('F', '0').replace('B', '1')
    colDescription = colDescription.replace('L', '0').replace('R', '1')

    row = getRange(rowDescription, rowRange)[0]
    col = getRange(colDescription, colRange)[0]
    
    seatID = (row * 8) + col
    
    seatIDs.append(seatID)

highestID = findMax(seatIDs)
print(highestID)
