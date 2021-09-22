time = int(input())

A = 0
B = 0
C = 0

while time > 0 :
     
    if time // 300 >= 1 : 
        A += (time//300)
        time -= (time//300) * 300

    if time // 60 >= 1 : 
        B += (time//60)
        time -= (time//60) * 60 
    
    if time // 10 >= 1 :
        C += (time//10)
        time -= (time//10) * 10

    if time < 10 or time == 0 : 
        break

if 0 < time < 10 :
    print(-1)
else:
    print(A,B,C)