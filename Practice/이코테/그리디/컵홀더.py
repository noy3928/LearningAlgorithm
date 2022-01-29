# 좌석의 배치에 따라서, 컵을 놓을 수 있는 사람의 수가 달라진다. 
# 구해야하는 수는 컵을 꽂을 수 있는 사람의 수. 
# 별의 갯수가 최댓값. 
# 

N = int(input()) 
member = input() 
count = member.count('LL') 

if (count <= 1): 
    print(len(member)) 
else: 
    print(len(member) - count + 1)

