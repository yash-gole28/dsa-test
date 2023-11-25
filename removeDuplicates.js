
const array = [1, 2, 2, 3, 4, 4, 5,1,7,6]



function removeDuplicates(array){
    let unique = 0
    let uniqueArr = []
    for(var i = 1 ; i<array.length+1;i++){
        if(array[i]!==array[i-1]){
            unique = array[i-1]
        if(!uniqueArr.includes(unique)){
              // console.log(array[i])
              uniqueArr.push(unique)
              console.log(unique)
        }
          
        }
    }
    return uniqueArr
}

console.log(removeDuplicates(array))