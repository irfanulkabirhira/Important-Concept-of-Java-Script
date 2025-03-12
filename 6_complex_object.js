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
// To print the merit
console.log("The Merit is : ",College.unique.result.merit);

// To access the [ Bijoy dibosh ]
console.log("The 2nd events of college: ",College.events[1]);

// To access logo color
console.log("The Logo color is ",College.unique["Logo Color"]);

