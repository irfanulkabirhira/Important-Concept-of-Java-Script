// Decalring an object name College
const College = {
    name : 'Rani College',
    class : ['6', '5','9'],
    events : ['Science Fair', 'Bijoy Dibosh', 'Nabinbaran'],
    unique : {
        'Logo Color': 'blue',
        result: {
            gpa : 5.00,
            merit : 'Top'
        }

    }
}

// Using for loop to show the property of College
for (const prop in College){
    console.log("Let's see the property of College Object : ", prop);
}

console.log("\n");

// To show the Value of Property
for (const prop in College){
    console.log("let's see the Value of college Property : ",College[prop]);
}
