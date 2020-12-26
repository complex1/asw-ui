import json 
  
# Opening JSON file 
f = open('colorList.json',) 
  
# returns JSON object as  
# a dictionary 
data = json.load(f)
file1 = open('colors.scss', 'w')
for i in data:
  for j in data[i]:
    line = '$' + i + '-' + j[0][0:-2] + ': ' + j[1] +';\n'
    file1.write(line)
file1.write(':export {\n')
for i in data:
  for j in data[i]:
    line = '\t' + i + '-' + j[0][0:-2] + ': ' + '$' + i + '-' + j[0][0:-2] +';\n'
    file1.write(line)
file1.write('\n}')
file1.close() 
f.close()