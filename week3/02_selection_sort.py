input = [4, 6, 2, 9, 1]



def selection_sort(array):
    n = len(array)


    for i in range(n-1):
        print('i:',i)
        min_index = i
        for j in range(n-i):
            print('j:',j)
            if array[i + j] < array[min_index]:
                min_index = i + j 
                print('min_index:',min_index)
        array[i],array[min_index] = array[min_index],array[i]


selection_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!