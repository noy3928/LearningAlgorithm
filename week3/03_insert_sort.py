input = [4, 6, 2, 9, 1]


def insertion_sort(array):
    n = len(array)

    for i in range(1,n): 
        for j in range(i):
            if array[i - j - 1] > array[i - j]:
                array[i - j - 1], array[i - j] = array[i - j],array[i - j - 1]
            else:
                break 
    # 이 부분을 채워보세요!
    return


insertion_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!

#최선의 경우에는 O(n)의 시간복잡도를 가질 수 있다. 