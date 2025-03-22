// Example: 
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3 
function findMissingNumber(arr) { 
    let firstNumber = arr[0];
    let lastNumber = arr[arr.length-1];


    for(let i=firstNumber; i<=lastNumber; i++){

        if (!arr.includes(i)){
            return i;
        }


    }
}

