input = "hello my name is sparta"


def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char)-ord('a')
        alphabet_occurrence_array[arr_index] += 1
        
    N = max(alphabet_occurrence_array)
    

    # 이 부분을 채워보세요!
    return N
    


result = find_max_occurred_alphabet(input)
print(result)