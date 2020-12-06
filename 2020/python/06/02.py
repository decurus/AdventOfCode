input = open('input')
lines = input.readlines()

currentGroup = 0
groups = ['']
concurrentAnswerCount = []


for line in lines: 
	if line == '\n':
		currentGroup += 1
		groups.append('')
		continue
	groups[currentGroup] += line
	
for group in groups:
	answers = group.split('\n')
	if '' in answers:
		answers.remove('')
	
	concurrentAnswers = []
	for letter in group:
		if letter in concurrentAnswers:
			continue
		numberCount = 0
		for answer in answers:
			if letter in answer:
				numberCount += 1
		if numberCount == len(answers):
			concurrentAnswers.append(letter)
				
	
	concurrentAnswerCount.append(len(concurrentAnswers))

count = 0

for c in concurrentAnswerCount:
	count += c

print(count)
