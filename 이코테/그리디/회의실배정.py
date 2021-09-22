#회의의 갯수를 최대한으로 배정하는 것이 중요하다면, 
#회의 시간이 작은 것을 우선적으로 생각해서 배치하는 것이 중요하다. 
#그렇다면, 회의시간이 작은 것을 구해서 순서대로 정렬하는 것이 먼저다.
#그 다음, 회의 시간이 작은 것들을 우선적으로 배치하는데, 어떻게 겹치지 않게 시간을 배치할 수 잇지? 
# 예를 들어, 2시부터 4시까지라고 한다면, 2< n <4인 수이면, 받을 수 없다. 
#그러면 회의시간이 작은 것들 순으로 범위를 만들어나가야 할 것 같다. 어떻게 범위를 만들어나가지?
# 

N = int(input())
time = []

for _ in range(N):
  start, end = map(int, input().split())
  time.append([start, end])

print("time",time)

time = sorted(time, key=lambda a: a[0]) # 시작 시간을 기준으로 오름차순
time = sorted(time, key=lambda a: a[1]) # 끝나는 시간을 기준으로 다시 오름차순

last = 0 # 회의의 마지막 시간을 저장할 변수
count = 0 # 회의 개수를 저장할 변수

for i, j in time:
  if i >= last: # 시작시간이 회의의 마지막 시간보다 크거나 같을경우
    count += 1
    last = j

print(count)