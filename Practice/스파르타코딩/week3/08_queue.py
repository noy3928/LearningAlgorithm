class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None # 마지막에 있는 노드를 tail노드라고 한다. 

#마지막에 데이터를 넣은 방법. 
    def enqueue(self, value):
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node
        self.tail = new_node 
        return

    def dequeue(self):
        if self.is_empty():
            return "Queue is Empty"
        delete_head = self.head
        self.head = self.head.next 
        return delete_head.data


    def peek(self):
        if self.is_empty():
            return "Queue is Empty"
        return self.head.data

    def is_empty(self):
        return self.head is None


queue = Queue()
queue.enqueue(3)
print(queue.peek())
queue.enqueue(4)
print(queue.peek())
queue.enqueue(5)
print(queue.peek()) 
print(queue.dequeue())
print(queue.peek())