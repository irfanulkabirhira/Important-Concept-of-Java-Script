//This will print not a number
const numbers = [23 , 243, 54, 123, 12]
console.log(Math.max(numbers));

// To find a max from an array
const num = [23, 243 , 54, 123 , 12]
function getMax(arr){
    let max ;
    max = arr[0]
    for (item of arr){
        if (item > max){
            max = item
        }
    }
    console.log("Max Number is : ",max);
}
getMax(numbers);