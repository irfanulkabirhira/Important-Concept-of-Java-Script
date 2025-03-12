const num = [4, 7, 8, 9 , 10]

/*
Two Types of Sorting technique :
Asscending ==> Smaller to Larger
Descending ==> Larger to Smaller
*/

// But this is for only Smaller to Larger
const sorted = num.sort();
console.log(sorted);

// This is Build in --> for Asscceding Sorting
num_asc = [...num].sort(function(a,b) {return a-b})
console.log("Assending Sorting : ",num_asc);


// This is also Build in --> for Desceing Sorting
num_asc = [...num].sort(function(a,b) {return b-a})
console.log("Descending Sorting : ",num_asc);