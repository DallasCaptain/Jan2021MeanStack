function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let y = 0; y < arr.length-1; y++){
            if(arr[y] > arr[y+1]){
                //[arr[y],arr[y+1]] = [arr[y+1],arr[y]]   es6 swap notation
                let temp = arr[y]
                arr[y] = arr[y+1]
                arr[y+1] = temp
            }
        }
    }
    return(arr)
}

console.log(bubbleSort([4,3,2,7,8,1]))

function selectionSort(arr){
    
    for(let i = 0; i<arr.length; i++){
        let mini = i
        for(let y = i; y < arr.length-1; y++){
            if(arr[y] < arr[mini]){
                mini = y
            }
        }
        //[arr[i],arr[y+1]] = [arr[y+1],arr[i]]   es6 swap notation
        let temp = arr[i]
        arr[i] = arr[mini]
        arr[mini] = temp
    }
    return(arr)
}

console.log(selectionSort([3,5,8,4,2,9]))