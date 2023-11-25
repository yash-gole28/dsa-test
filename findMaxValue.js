const array = [2, 8, 5, 1, 9,6,1,67,9]

function findMaxValue(array){
    let bigNo = 0
    for(var i = 0; i<array.length;i++){
        if(array[i]>bigNo){
            bigNo = array[i]
        }
    }
    return bigNo
}

console.log(findMaxValue(array))