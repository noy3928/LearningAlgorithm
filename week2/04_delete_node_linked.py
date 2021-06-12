class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

# 아래 함수는 index번째에 있는 노드를 구해주는 함수이다. 
    def get_node(self, index):
        node = self.head 
        count = 0 
        while count < index: 
            node = node.next 
            count += 1 
        return node 

 #인덱스 번째에 새로운 노드를 추가하는 함수   
    def add_node(self, index, value):
        new_node = Node(value) #[6]
        if index == 0:
            new_node.next = self.head # [6] -> [5]
            self.head = new_node # head -> [6] -> [5]
            return

        node = self.get_node(index - 1) #[5]
        next_node = node.next #[12]
        node.next = new_node # [5] -> [6]
        new_node.next = next_node # [6]-> [12
        return 

#인덱스 번째에 있는 노드를 삭제하는 함수 
    def delete_node(self,index):
        #첫번째 노드를 삭제하는 방법 
        if index == 0: 
            self.head = self.head.next
        #인덱스번째에 있는 노드를 가져온다. 그 노드 다음에 있는 노드를 현재 인덱스 노드의 값에 넣는다. 
        node = self.get_node(index-1)
        node.next = node.next.next


linked_list = LinkedList(5)
linked_list.append(12)
linked_list.get_node(8) # -> 5를 들고 있는 노드를 반환해야 합니다!
