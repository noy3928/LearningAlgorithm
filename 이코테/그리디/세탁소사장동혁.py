T = int(input())
price_list = []

for _ in range(T):
    price_list.append(int(input()))

def get_change_count(price):
    Q = 0
    D = 0
    N = 0
    P = 0 

    while price > 0 :
        if (price // 25) >= 1 : 
            Q += (price//25)
            price -= (price//25) * 25
        if (price // 10) >= 1 : 
            D += (price//10)
            price -= (price//10) * 10
        if (price // 5) >= 1 :
            N += (price//5)
            price -= (price//5) * 5
        if (price // 1) >= 1 :
            P += (price//1) 
            price -= (price//1) * 1
            
    print(Q,D,N,P)


for price in price_list: 
    get_change_count(price)

