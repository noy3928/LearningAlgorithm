Factorial(N) = N * Factorial

def factorial(n):
    if n == 1:
        return 1
    # 이 부분을 채워보세요!
    return n * factorial(n-1) 


print(factorial(5))