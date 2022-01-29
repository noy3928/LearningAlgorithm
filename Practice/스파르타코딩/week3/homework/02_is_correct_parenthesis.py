s = "(())()"


# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None


# class Stack:
#     def __init__(self):
#         self.head = None

#     def push(self, value):
#         new_head = Node(value)
#         new_head.next = self.head
#         self.head = new_head
#         return

#     # pop 기능 구현
#     def pop(self):
#         if self.is_empty():
#             return "Stack is Empty"
#         delete_head = self.head
#         self.head = self.head.next
#         return delete_head 

#         # 어떻게 하면 될까요?
#         return

#     def peek(self):
#         if self.is_empty():
#             return "Stack is Empty"
#         return self.head.data

#     # isEmpty 기능 구현
#     def is_empty(self):
#         return self.head is None 
#         # 어떻게 하면 될까요?


# def is_correct_parenthesis(string):

#     correct_answer = Stack()

#     for i in string:
#         if i == "(":
#             correct_answer.push(i)
#         else:
#             correct_answer.pop(i)
    
#     # 구현해보세요!
#     return correct_answer.is_empty()

# print(is_correct_parenthesis(s))  # True 를 반환해야 합니다!

def is_correct_parenthesis(string):
    stack = []

    for i in range(len(string)):
        if string[i] == "(":
            stack.append(i) 
        elif string[i] == ")":
            if len(stack) == 0:
                return False
            stack.pop()

    if  len(stack) != 0:
        return False
    else: 
        return True 


print(is_correct_parenthesis(s))
        

