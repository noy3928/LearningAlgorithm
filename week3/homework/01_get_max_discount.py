shop_prices = [30000, 2000, 1500000]
user_coupons = [20, 40]

# 할인을 많이 받기 위해서는 가격이 큰 숫자에 높은 할인율의 쿠폰을 적용시키면 된다. 
#이것을 위해서는 먼저 가격의 배열내에 요소 중 최댓값을 구한다. 
#그 다음 할인 쿠폰 중에서 최댓값을 구한다. 
#쿠폰의 갯수만큼 반복문을 돌린다. 
def get_max_discounted_price(prices, coupons):
    coupons.sort(reverse=True)
    prices.sort(reverse=True)
    price_index = 0
    coupon_index = 0
    max_discounted_price = 0

    while price_index < len(prices) and coupon_index < len(coupons):
        max_discounted_price += prices[price_index] * (100 - coupons[coupon_index])/100
        price_index += 1
        coupon_index += 1
    
    # while price_index< len(prices):
    #     max_discounted_price += prices[price_index]
    #     price_index += 1 

    

    # 이 곳을 채워보세요!
    return max_discounted_price


print(get_max_discounted_price(shop_prices, user_coupons))  # 926000 이 나와야 합니다.