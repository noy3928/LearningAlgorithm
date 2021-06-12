finding_target = 2
finding_numbers = [0, 3, 5, 6, 1, 2, 4]

def is_exist_target_number_binary(target, numbers):
    sorted_numbers = numbers.sort()
    current_min = 0 
    current_max = len(array) - 1
    current_guess = (current_min + current_max) // 2

    while current_min <= current_max:
        if sorted_numbers[current_guess] == target:
            return True
        elif sorted_numbers[current_guess] < target:
            current_min = current_guess + 1
        else:
            current_max = current_guess - 1 

    # 이 부분을 채워보세요!
    return 1


result = is_exist_target_number_binary(finding_target, finding_numbers)
print(result)


def is_existing_target_number_binary(target, array):
    current_min = 0
    current_max = len(array) - 1
    current_guess = (current_min + current_max) // 2

    while current_min <= current_max:
        if array[current_guess] == target:
            return True
        elif array[current_guess] < target:
            current_min = current_guess + 1
        else:
            current_max = current_guess - 1
        current_guess = (current_max + current_min)
    # 구현해보세요!
    return False