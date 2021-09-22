price = int(input())

change = 1000 - price 
count = 0
coin_list = [500,100,50,10,5,1]

def get_count(coin):
    global change 
    global count
    count += change//coin
    change -= (change//coin) * coin

while change > 0 : 

    for coin in coin_list: 
        if change // coin >= 0 :
            get_count(coin)
    

print(count)