import sys
sys.setrecursionlimit(100000)
file = open('input')
lines = file.readlines()
unnecessaryStuff = ['contain', ',', '.', 'bag', 'bags', 'no', 'other', 'bag,', 'bags,', '\n', 'bags.\n', 'bag.\n', 'bags.']

targetColor = 'shiny gold'

rules = []

for line in lines:
	print(line)
	newRuleSet = line.split(' ')
	filterdRuleSet = []
	for word in newRuleSet:
		if word not in unnecessaryStuff:
			filterdRuleSet.append(word)
		
	for bit in filterdRuleSet:
		try:
			int(bit)
			filterdRuleSet.remove(bit)
		except ValueError:
			continue
	
	nrs = []
	print(filterdRuleSet)
	for i in range(0, len(filterdRuleSet), 2):
		x = filterdRuleSet[i] + ' ' + filterdRuleSet[i+1]
		nrs.append(x)
		
	rules.append(nrs)


containers = []

def findContainers(color):
	possibleContainers = []
	for rule in rules:
		if len(rule) == 0:
			continue
		for i in range(1, len(rule)):
			if rule[i] == color and rule[0] not in possibleContainers:
				possibleContainers.append(rule[0])
				if rule[0] not in containers:
					containers.append(rule[0])
		
	currentlen = len(possibleContainers)
	
	for nextColor in possibleContainers:
		currentlen += findContainers(nextColor)
		
	return currentlen

findContainers(targetColor)
print(containers)
print(len(containers))
