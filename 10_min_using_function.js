// Array of object
const mobiles = [
    {Name :'Samsung ', Price : 12000, Camera : '12mp', color : 'black' },
    {Name :'Nokya ', Price : 11000, Camera : '2mp', color : 'white' },
    {Name :'Symphomy', Price : 10000, Camera : '5mp', color : 'black ' },
]

function getCheap(phones){
    let min = phones[0];
    for (const phone of phones){
        if(phone.Price < min.Price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheap(mobiles);
console.log("The minimum price is : ", cheap.Price)