from tqdm import tqdm

inputFile = open('input')
lines = inputFile.readlines()
numberCount = int(input("How many numbers do you need?"))
indecies = []

def increaseIndecies(index):
    #TODO: still could use some improvements: currently, combinations can be checked multiple times, which does not make any sense
    indecies[index] = indecies[index]+1
    if indecies[index] >= len(lines):
        indecies[index]=0
        if index<len(indecies)-1:
            increaseIndecies(index+1)
    #print(indecies)

 
for i in range(numberCount):
    indecies.append(0)

print (indecies)

numberOfRuns = (len(lines)-1) ** len(indecies)

for i in tqdm(range(numberOfRuns)):
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
            print("Number " + str(a) + ":" + str(lines[a]))
        print ("Product of all: " + str(product))
        exit()
    increaseIndecies(0)

print("something went wrong, no match found")
