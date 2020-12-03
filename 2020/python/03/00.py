inputFile = open('input')
lines = inputFile.readlines()
treeChar = '#'

solutions = []

while input("Do a new run? (y/n): ") == 'y':
    slopeX = int(input("Slope in X direction: "))
    slopeY = int(input("Slope in Y direction: "))
    currentX = 0
    hitTrees = 0
    
    linelength = len(lines[0].replace('\n', ''))
    
    for i in range(slopeY, len(lines), slopeY):
        currentX += slopeX
        while currentX >= linelength:
            currentX -= linelength
        
        modifiedLine = lines[i]
    
        if lines[i][currentX] == treeChar:
            hitTrees += 1

    print('Hit Trees: '+str(hitTrees))
    solutions.append(hitTrees)
    
product = 0
for tree in solutions:
    if product == 0:
        product = tree
    else:
        product *= tree
        
print("Product: " + str(product))


