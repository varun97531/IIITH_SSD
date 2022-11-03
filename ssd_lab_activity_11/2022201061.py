#QUESTION 1

import csv
file = open('lab_11_data.csv')
csvfile = csv.reader(file)

val = []
for row in csvfile:
    val.append(row[0:-6])

for value in val:
    print(value)
print(len(val))
print("="*30)

#QUESTION 2
change_index = val[0].index('% Chng')
val2 = []
val2.append(val[0])
my_list = []
my_list1 = []
my_list.append(val[0])
my_list1 = (list(filter(lambda x: float(x[change_index])>-3.0, val[1:])))

# print(my_list1)
for lst in my_list1:
    my_list.append(lst)

for value in my_list:
    print(value)
print(len(my_list))
print("="*30)

#QUESTION 3
open1 = []
high = []
low = []
open_index = my_list[0].index('Open')
high_index = my_list[0].index('High')
low_index = my_list[0].index('Low')

for value in my_list[1:]:
    open1.append(float(value[open_index].replace(",", "")))
    high.append(float(value[high_index].replace(",", "")))
    low.append(float(value[low_index].replace(",", "")))

q3 = list(map(lambda x: sum(x)/len(x), [open1, high, low]))
print(q3)
f = open("average_output.txt", 'w')
f.write(str(q3[0]) + "\n" + str(q3[1]) + "\n" + str(q3[2]) + "\n")
f.close()

print("="*30)

#QUESTION 4 and 5
inp = input("Enter word from A-Z : ")
f = open("stock_output.txt", 'w')
for lst in my_list:
    if(lst[0][0] == inp.upper() or lst[0][0] == inp.lower()):
        print(lst)
        for val in lst:
            f.write(val + " ")
        f.write("\n")
f.close()
print("="*30)