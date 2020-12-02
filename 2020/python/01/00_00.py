inputFile = open('input')
lines = inputFile.readlines()
numberCount = int(input("How many numbers do you need?"))
indecies = []

def increaseIndecies(index):
    indecies[index] = indecies[index]+1
    if indecies[index] >= len(lines):
        indecies[index]=0
        if index<len(indecies)-1:
            increaseIndecies(index+1)
    print(indecies)

def checkEnd():
    Sum = 0
    for i in indecies:
        Sum += i

    #print(str(Sum) + " / " + str(len(indecies) *(len(lines)-len(indecies))))
    if i >= len(indecies) * (len(lines)-1):
        return True
    return False
            
 
for i in range(numberCount):
    indecies.append(0)

print (indecies)

while checkEnd() == False:
    Sum = 0
    for i in range(len(indecies)):
        Sum += int(lines[indecies[i]])

    if Sum == 2020:
        print("Match found")
        product = 0
        for a in indecies:
            if product == 0:
                product = int(lines[a])
            else:
                product *= int(lines[a])
            print(lines[a])

        print (product)
        exit()
    increaseIndecies(0)

print("something went wrong, no match found")
