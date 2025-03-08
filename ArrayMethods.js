const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits)

console.log(fruits.length)      //1- length => returns the length
console.log(fruits.at(2))       //2- at => Get the element
fruits.pop();                   //3- pop => removes the last element from an array
fruits.push("Kiwi");            //4- push => adds a new element to an array (at the end)
fruits.shift();                 //5- shift => removes the first array element
fruits.unshift("Lemon");        //6- unshift => adds a new element to an array (at the beginning)
console.log(fruits.join(" * "));//7- join => 