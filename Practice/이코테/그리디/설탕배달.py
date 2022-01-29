sugar_N = int(input())

bag_N = 0 

while sugar_N >= 0:
  if sugar_N % 5 == 0:
    bag_N += sugar_N//5
    print(bag_N)
    break
  sugar_N -= 3 
  bag_N += 1 
else:
  print('-1')


