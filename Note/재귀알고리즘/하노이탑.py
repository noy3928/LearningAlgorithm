def hanoi(n,A,B,C) : 
    if n == 1:
        print('board', n, 'move', A, '->', C)
    else:
        hanoi(n-1,A,C,B)
        print('board',n,'move',A,'->',C)
        hanoi(n-1,B,A,C)

hanoi(3, 'left','mid','right')

