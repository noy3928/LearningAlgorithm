# 1.전달 받은 데이터를 ds 리스트에 저장한다.
# 2.ds 리스트의 길이가 2보다 작으면 ds리스트를 반환한다.
# 3.ds 리스트의 길이가 2보다 작지 않으면 다음을 실행한다.
    # ds리스트의 0번째 요소를 Key에 저장한다.
    # ds리스트에서 key 값보다 작거나 같은 요소들을 Left리스트에 저장한다.
    # ds리스트에서 key 값보다 큰 요소들을 Right 리스트에 저장한다.
    # quick를 호출하여 반환 받은 값, key 값, quick를 호출하여 반환 받은 값을 연결한 리스트를 반환한다. 

def quick(ds):
    if len(ds)<2:
        return ds 
    else:
        key=ds[0]
        left=[data for data in ds[1:] if data<=key]
        right=[data for data in ds[1:] if data>key]
        return quick(left)+[key]+quick(right)

dataset=[20,50,30,10,60,40]
print(quick(dataset))