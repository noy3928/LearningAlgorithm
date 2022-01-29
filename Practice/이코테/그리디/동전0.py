#n번째 줄까지 동전을 받는 방법? 
# 동전의 종류가 있는 리스트를 받는다. 오름차순으로 정리되어 있는 것을 역순으로 바꾼다. 
#역순으로 바뀐 동전의 종류들을 차근차근 나누어 나가면서 확인한다. 
#동전으로 나누었을 때 몫이 1보다 작으면, 그 동전으로는 나누지 않는다. 
#동전으로 나누었을 때 몫이 1혹은 1보다 큰 수가 나타나면, 해당 동전으로 최대한 많이 나눈다. 
#언제까지 나누냐? 그냥 나눈다. 나눈 몫을 동전갯수를 구하는 변수에 넣는다. 나누고 나서 남은 나머지를 구한다. 
#그 다음 동전으로 나누고나서, 남은 나머지를 구한다. 
#이런 식으로 계속해서 나누고 남은 나머지를 구한다. 

#여러줄에 걸쳐서 인풋을 받는 방법이 있다. 


from collections import deque

N, K = map(int, input().split())

value_list = []
deq = deque(value_list)
for _ in range(N) : 
    value = int(input())
    if (K // value) < 1 : 
        continue
    else:
        deq.appendleft(value)

value_list = list(deq)
count = 0
for coin in value_list: 
    if (K % coin) == 0 :
        count += (K//coin)
        break
    else:
        count += (K//coin)
        K = (K % coin)

print(count)
