const solution = (numbers) => { 
    for( let i = 0 ; i < numbers.length ; i ++){
        for(let j = i + 1; j < numbers.legnth; j ++){
            if(numbers[i] == numbers[j]){
                return true 
            }
        }
    }

}

const solution = (numbers) => { 
    numbers.sort((a,b) => a - b) 
    for( let i = 0 ; i < numbers.length ; i ++){
        if(numbers[i] == numbers[i + 1]) return true
    }
    return false
}

const solution = (numbers) => { 
    const numberSet = new Set()

    for(num of numbers){
        if(numberSet.has(num)){
            return true
        }else{
            numberSet.add(num)
        }
    }
    return false
}

