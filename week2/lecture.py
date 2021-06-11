
class Node:
    def__init__(self,data):
    self.data = data
    self.next = None

first_node = Node(5)
second_node = Node(12)
first_node.next = second_node
# 첫 노드에 다음 노드를 연결시켜준다. 

# 링크드 리스트는 맨 앞칸만 가지고 있으면 된다. 