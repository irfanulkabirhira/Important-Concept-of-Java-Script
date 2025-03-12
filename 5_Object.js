// Decalring an Object
const person = {
    'Full Name' : 'MD Irfanul Kabir Hira',
    age : 26,
    Salary : 12000,
    Maried : true
}

console.log("The Details : ",person);
// for printing Only Age
console.log("Age is : ",person.age);
// for printing Full name
console.log("The Full name is : ",person["Full Name"]);

/*
java Script is a reassign Function

*/
// For Reassigning
person["Full Name"] = 'Abdullah Al Tawssif'
console.log("After Reassiginig the Value : ",person);

// For seeing the keys of person Object
const chabi = Object.keys(person)
console.log("The keys of Person is : ",chabi);
