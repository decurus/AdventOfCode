input = open('input')
lines = input.readlines()

currentGroup = 0
groups = ['']
groupResults = []

for line in lines: 
	if line == '\n':
		currentGroup += 1
		groups.append('')
		continue
	groups[currentGroup] += line
	
for group in groups:
	positives = []
	for letter in group:
		if letter == '\n':
			continue
		if letter not in positives:
			positives.append(letter)
	
	groupResults.append(len(positives))

print(groupResults)

summe = 0

for s in groupResults:
	summe += s

print('Sum: ' + str(summe))