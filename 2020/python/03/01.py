inputFile = open('input')
lines = inputFile.readlines()

slopeX = 3
slopeY = 1


currentX = 0
hitTrees = 0

treeChar = '#'

linelength = len(lines[0].replace('\n', ''))

for i in range(1, len(lines), slopeY):
    currentX += slopeX
    while currentX >= linelength:
        currentX -= linelength
    
    modifiedLine = lines[i]

    if lines[i][currentX] == treeChar:
        hitTrees += 1
        l = list(modifiedLine)
        l[currentX] = 'X'
        modifiedLine = "".join(l)
    else:
        l = list(modifiedLine)
        l[currentX] = 'O'
        modifiedLine = "".join(l)
        
    print(modifiedLine)
print(hitTrees)


