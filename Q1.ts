// question no 1
let Name: string = "Arshad";
console.log(`Hello ${Name}, would you like to learn some Python today?`);

// question no 2
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
// console.log(Name.t);

// Question no.3
let quote: string = "I don't believe in quotes, because my life depends upon me not in other's wording";
let author: string = "Arshad Raza";

// Question no.3


let famous_person: string = "Winston Churchill";
let message: string = `${famous_person} once said, "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`;
console.log(message);

// Question no.3

let formattedString: string = "First line\tTab\nThird line";
console.log(formattedString);

// Question no.3

// Addition
console.log("Addition:");
console.log(`5 + 3 = ${5 + 3}`);

// Subtraction
console.log("\nSubtraction:");
console.log(`10 - 2 = ${10 - 2}`);

// Multiplication
console.log("\nMultiplication:");
console.log(`4 * 2 = ${4 * 2}`);

// Division
console.log("\nDivision:");
console.log(`16 / 2 = ${16 / 2}`);

// Question no.3

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Question no.3

let favoriteNumber: number = 7;
let message2: string = `My favorite number is ${favoriteNumber}.`;

console.log(message2);

// Question no.3
// programming for fun

/* Name: Arshad Raza
Date: 25/02/2024*/
let comment: boolean = true;
if (comment == true) {
    console.log("I have passed");
}
else {
    console.log("I am failed");
}

// Question no.3

let friends: string[] = ["Asif", "Ali", "Akmal", "Navaid"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);


// Question no.3
let friends1: string[] = ["Asif", "Ali", "Akmal", "Navaid"];
let greeting: string = "hello ,"
for (let names of friends1) { console.log(greeting + names) };

// Question no.3
let favTransport: string[] = ["bike", "car", "aeroplane"];
let favState: string[] = ["I like to ride ", "I will buy a ", "i will fly in "];

console.log(favState[0] + favTransport[0]);
console.log(favState[1] + favTransport[1]);
console.log(favState[2] + favTransport[2]);

// Question no.3

let guestName: string[] = ["Asif", "Ali", "Akmal", "Navaid"];
for (let guest in guestName) {
    console.log(`Dear ${guestName[guest]}, you are invited for dinner.`);
}
// Question no.3
guestName.pop();
guestName.push("arshad");
console.log(guestName);

for (let guest in guestName) { console.log(`Dear ${guestName[guest]}, you are invited for dinner.`) };

// Question no.3
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestName.unshift("navaid");

// Add one new guest to the middle of the array
guestName.splice(Math.floor(guestName.length / 3), 0, "Nikola Tesla");

// Add one new guest to the end of the array
guestName.push("owais");

// Print the updated invitation messages
console.log("\nUpdated Invitations to Dinner:");
for (let guest of guestName) {
    console.log(`Dear ${guest}, you are invited for dinner.`);
}
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestName.length > 2) {
    let removedGuest = guestName.pop();
    console.log(`\nSorry, ${removedGuest}. We can't invite you to dinner this time.`);
}

// Print messages to the two remaining guests
console.log("\nInvitations to Dinner:");
for (let guest of guestName) {
    console.log(`Dear ${guest}, you are still invited to dinner. We would be honored to have your presence.`);
}

// Remove the last two names from the list
guestName.pop();
guestName.pop();

// Print the empty list
console.log("\nRemaining Guests:", guestName);


// array of place to visit
let visitPlaces: string[] = ["Saudia", "China", "Dubai", "Japan"];
console.log(visitPlaces);
console.log("\nsorted but no change in original");

console.log([...visitPlaces].sort());
// original
console.log("\noriginal");
console.log(visitPlaces);

//reversed in alphabatic order but no change in original
console.log("\nreversed in alphabatic order but no change in original");
console.log([...visitPlaces].sort().reverse());
// original
console.log("\noriginal");
console.log(visitPlaces);

// Reverse the order of the list

console.log("\nReversed Order:");
visitPlaces.reverse();
console.log(visitPlaces);

// Reverse the order of the list again to revert to the original order

console.log("\nOriginal Order (reversed again):");
visitPlaces.reverse();
console.log(visitPlaces);

// Sort the array in alphabetical order

console.log("\nAlphabetical Order (sorted):");
visitPlaces.sort();
console.log(visitPlaces);

// Question no.3
console.log("Number of places in list:", visitPlaces.length);

// Question no.3
let mountain : string[]= ["Everest","K2","Lhotse","Manaslu"];
console.log("\nList of Mountains");
console.log(mountain);

// Question no.3
//data of student 1

let student :{Name:string , Class:number, age:number, attendenceOfToday:boolean} =
{Name:"arshad",
Class:14,
age:22,
attendenceOfToday:true,
};
//data of student 2
let student1 :{Name:string , Class:number, age:number, attendenceOfToday:boolean} =
{Name:"asif",
Class:12,
age:22,
attendenceOfToday:false,
};

console.log(student);
console.log(student1);

// Question no.3
let numbers: number[] = [1, 2, 3, 4, 5];

// Accessing an element at an out-of-bounds index
console.log(numbers[10]);
  // Trying to access element at index 10, which doesn't exist


// Accessing an element at a valid index
console.log(numbers[2]); // Accessing element at index 2, which exists

// Question no.3
let student2 : string= "present"
console.log("Is student2== present?I pridicted true.");
console.log(student2== "present");

let nextBallRun : number =6;
console.log("will nextBallRun == 6? I pridict true");
console.log(nextBallRun==6);

let tommorow : string = "monday";
console.log("Is tommorow== monday?I pridicted true.");
console.log(tommorow=="monday");

let attendClass : boolean= true;
console.log("will I attendclass? I pridicted true");
console.log(attendClass==true);







