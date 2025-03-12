// Using While loop
let number = 1
let sum = 0

while(number <=10){
    sum = sum +number
    number++
}
console.log("The Summation is : ",sum);


// 2nd Way ( Using For loop)
let summ= 0
for (let i = 0 ; i<=10; i++){
    summ = summ + i
}
console.log("The Summation is : ",summ);

// 3rd problem
for (let item = 0 ; item < 5 ; item ++){
    if (item % 2 === 0){
        console.log(item);
    }
}


