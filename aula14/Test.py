from MainTest import MainTest

class Test(MainTest):
    def __init__(self, name):
        super().__init__(name)


    def sayHello(self):
        return "Hello I'm "+ super().sayHello()