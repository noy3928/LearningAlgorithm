

class Node:
    def __init__(self, data):
        self.data = data 
        self.next = None 

node = Node(3)
first_node = Node(4)
node.next = first_node
print(node)

print(node.next.data)

print(node.data)

class LinkedList:

    def __init__(self, data):
        self.head = Node(data)

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            return

        self.head.next = Node(data)

        cur = self.head
        while cur.next is not None:
            cur = cur.next 
        cur.next = Node(data)

# 모든 노드들을 출력하는 함수. 
    def print_all(self):
        print("hihihi")
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

