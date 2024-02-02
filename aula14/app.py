print('Hello World py')

a = 'var A'
b = 'var B'
c = 'const C'

def func():
    f = a + b
    print(f)

func()

# print(a)
# print(b)
# print(c)

arr = [0, 10, 12, 89]
print(arr)
#for loop in py
lenght = len(arr)
for i in range(lenght):
    print(arr[i])

#for each loop in python

for element in arr:
    print(element)

#while loop in python
i= 0

while i<lenght:
    print(arr[i])
    i+=1

#functions with parameters in python
    
print ("PY addNumbers Function")
def addNumbers(a,b):
    return a + b

print (addNumbers(1,2))

#classes in python

# class Test:
#     def __init__(self, name):
#             self.name = name
    
#     def sayHello(self):
#          return "Hello I'm " + self.name
    
# testClass = Test("Joao Python")
# print(testClass.sayHello())

from Test2 import Test2

test = Test2("Joao python")
print(test.sayHello())