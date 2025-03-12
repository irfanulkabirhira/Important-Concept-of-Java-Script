// Jokhn just Normally , normally call korle hobe
function something(){
    console.log("This is the Basic Stracture of function");
}
something()

console.log("\n");

// 2nd Jokhn kono kichu return kori , sheta alada ekta varibale e nea lagbe, then print korte hobe
function anything(){
    return "Returning anything from function "
}
const value = anything()
console.log(value);

console.log("\n");

// 4rth==> ekhane kichu return kori nai so
function add(num1, num2){
    sum = num1 + num2;
    console.log("The sum is : ",sum);
}
add(7,5);


// 5th ==>
// Check of the String is Even or not

function evenSizeChar(str){
    const size = str.length;
    if (size % 2=== 0 ){
        console.log("Even Size Character ");
    }
    else{
        console.log("Odd Size character ");

    }
    console.log("This is : ",size);
}
evenSizeChar("Hira")

//6th ===>
// Sum of array with funciton
//==> function so ==> of use korlam
function sumOfArray(array){
    let sum = 0 ;
    for (const num of array){
        sum = sum + num
    }
    return sum ;
}

const nums = [4, 3, 5, 56, 6]
const totalsum = sumOfArray(nums)
console.log("The Total Sum is : ",totalsum);


//7th
// Return all even Numeber==> usinkg Continue
function even_array(numbers){
    let evenArray = []
    for(let numebr of numbers){
        if (numebr %2 ===0 ){
            evenArray.push(numebr)
        }
        else{
            continue;
        }
    }
    return evenArray;
}

const arr = [2, 3, 4, 12, 34]
console.log(even_array(arr));