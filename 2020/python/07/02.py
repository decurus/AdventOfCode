import sys
import json
sys.setrecursionlimit(100000)
file = open('input')
lines = file.readlines()
unnecessaryStuff = ['contain', ',', '.', 'bag', 'bags', 'no', 'other', 'bag,', 'bags,', '\n', 'bags.\n', 'bag.\n', 'bags.']

targetColor = '0 shiny gold'

rules = []

for line in lines:
	newRuleSet = line.split(' ')
	filterdRuleSet = []
	for word in newRuleSet:
		if word not in unnecessaryStuff:
			filterdRuleSet.append(word)
	
	nrs = []
	filterdRuleSet.insert(0,'0')
	for i in range(0, len(filterdRuleSet), 3):
		x = filterdRuleSet[i] + ' ' + filterdRuleSet[i+1] + ' ' + filterdRuleSet[i+2]
		nrs.append(x)
		
	rules.append(nrs)




def findContainers(color):
	contentCount = 0
	for rule in rules:
		if len(rule) == 0:
			continue
		if rule[0] == color:
			if len(rule) == 1:
				return 0
			for r in range(1, len(rule)):
				content= findContainers('0' + rule[r][1:])
				if content == 0:
					contentCount += int(rule[r][:1])
				else:
					contentCount += ((content * int(rule[r][:1])) + int(rule[r][:1]))

			break
					
	return contentCount
	
		

contentCount = findContainers(targetColor)

print(contentCount)


