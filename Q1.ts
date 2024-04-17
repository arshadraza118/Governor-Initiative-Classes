
// question no 2
let Name: string = "Arshad";
console.log(`Hello ${Name}, would you like to learn some Python today?`);

// question no 3
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
// console.log(Name.t);

// Question no.4
let quote: string = "I don't believe in quotes, because my life depends upon me not in other's wording";
let author: string = "Arshad Raza";

// Question no.5


let famous_person: string = "Winston Churchill";
let message: string = `${famous_person} once said, "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`;
console.log(message);

// Question no.6

let formattedString: string = "First line\tTab\nThird line";
console.log(formattedString);

// Question no.7

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

// Question no.8

let favoriteNumber: number = 7;
let message2: string = `My favorite number is ${favoriteNumber}.`;

console.log(message2);

// Question no.9
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

// Question no.10

let friends: string[] = ["Asif", "Ali", "Akmal", "Navaid"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);


// Question no.11
let friends1: string[] = ["Asif", "Ali", "Akmal", "Navaid"];
let greeting: string = "hello ,"
for (let names of friends1) { console.log(greeting + names) };

// Question no.12
let favTransport: string[] = ["bike", "car", "aeroplane"];
let favState: string[] = ["I like to ride ", "I will buy a ", "i will fly in "];

console.log(favState[0] + favTransport[0]);
console.log(favState[1] + favTransport[1]);
console.log(favState[2] + favTransport[2]);

// Question no.13

let guestName: string[] = ["Asif", "Ali", "Akmal", "Navaid"];
for (let guest in guestName) {
    console.log(`Dear ${guestName[guest]}, you are invited for dinner.`);
}
// Question no.14
guestName.pop();
guestName.push("arshad");
console.log(guestName);

for (let guest in guestName) { console.log(`Dear ${guestName[guest]}, you are invited for dinner.`) };

// Question no.15
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

// Question no.16
console.log("Number of places in list:", visitPlaces.length);

// Question no.17
let mountain: string[] = ["Everest", "K2", "Lhotse", "Manaslu"];
console.log("\nList of Mountains");
console.log(mountain);

// Question no.18
//data of student 1

let student: { Name: string, Class: number, age: number, attendenceOfToday: boolean } =
{
    Name: "arshad",
    Class: 14,
    age: 22,
    attendenceOfToday: true,
};
//data of student 2
let student1: { Name: string, Class: number, age: number, attendenceOfToday: boolean } =
{
    Name: "asif",
    Class: 12,
    age: 22,
    attendenceOfToday: false,
};

console.log(student);
console.log(student1);

// Question no.19
let numbers: number[] = [1, 2, 3, 4, 5];

// Accessing an element at an out-of-bounds index
console.log(numbers[10]);
// Trying to access element at index 10, which doesn't exist


// Accessing an element at a valid index
console.log(numbers[2]); // Accessing element at index 2, which exists

// Question no.20
let student2: string = "present"
console.log("Is student2== present?I pridicted true.");
console.log(student2 == "present");

let nextBallRun: number = 6;
console.log("will nextBallRun == 6? I pridict true");
console.log(nextBallRun == 6);

let tommorow: string = "monday";
console.log("Is tommorow== monday?I pridicted true.");
console.log(tommorow == "monday");

let attendClass: boolean = true;
console.log("will I attendclass? I pridicted true");
console.log(attendClass == true);

let comingPerson: string = "Bilal";
console.log("Is commingPerson==Bilal? I pridicted true");
console.log(comingPerson == "Bilal");

let child: string = "Not Sleeping"
console.log("Is child==Sleeping? I pridicted false");
console.log(child == "Sleeping");

let ramzan: string = " not from Tomorrow";
console.log("Is ramzan==tomorrow? I pridicted false");
console.log(ramzan == "from tomorrow");

let sleepingEarly: boolean = false;
console.log("Is sleepEarly==true? I pridicted false");
console.log(sleepingEarly !== false);

let me: string = "will be programmer";
console.log("will me==not be a programmer? I pridicted false");
console.log(me == "will not be programmer");

//Queastion Node.21
//Tests for equality and inequality with strings
console.log("• Tests for equality and inequality with strings");


let string1: string = "first";
let string2: string = "second";

console.log("Equality test with strings:");
console.log(string1 === string2);
console.log("Inequality test with strings:");
console.log(string1 !== string2);
//Tests using the lower case function
console.log("Tests using the lower case function");
let uppercaseString: string = "FIRST";
let lowercaseString: string = "first";

console.log("Lowercase test:");
console.log(uppercaseString.toLowerCase() === lowercaseString);
console.log(uppercaseString === lowercaseString);
console.log(uppercaseString.toLowerCase() == lowercaseString);
console.log(uppercaseString == lowercaseString);

//Numerical tests:
console.log("Numerical tests:");
let number1: number = 10;
let number2: number = 5;

console.log("Equality test with numbers:");
console.log(number1 === number2);
console.log("Inequality test with numbers:");
console.log(number1 !== number2);
console.log("Greater than test:");
console.log(number1 > number2);
console.log("Less than test:");
console.log(number1 < number2);
console.log("Greater than or equal to test:");
console.log(number1 >= number2);
console.log("Less than or equal to test:");
console.log(number1 <= number2);

//Tests using "and" and "or" operators:
console.log("Tests using 'and' and 'or' operators:");
let x: number = 20;
let y: number = 30;
let z: number = 40;

console.log("And operator test:");
console.log(x < y && y < z);
console.log("Or operator test:");
console.log(x < y || x > z);

//Test whether an item is in an array
console.log("Test whether an item is in an array");
let army: number[] = [1, 2, 3, 4, 5];

console.log("Item in array test:");
console.log(army.indexOf(5));

console.log("Item is not in array test:");
console.log(!army.indexOf(5));

//question no.22
let player: string = "Arshad"
let alien_colour: string = "green";
if (alien_colour == "green") {
    console.log(`${player}, got a 5 points`)
}
if (alien_colour !== "green") {
    console.log(`${player}, did not get 5 points`);
}


// Question no.23
let Alien_colour: string = "green";
if (Alien_colour == "green") {
    console.log("\nthe player just earned 5 points for shooting the alien.");
} if (Alien_colour !== "green") {
    console.log("\nthe player just earned 10 points.");
}

// Question no.24
// if statement will run 
let age: number = 18;
if (age >= 18) {
    console.log("you can drive a car");


} else {
    console.log("you can not drive a car")

}

// else statement will run
let lisence: string = "true";
if (lisence == "false") {
    console.log("\nyou dont have a lisence");
} else {
    console.log("\nyou have a lisence");
}

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.
// version 1
console.log("\n version1");

let alien_colour1: string = "red";
if (alien_colour1 == "green") {
    console.log("the player earned 5 points");
} else if (alien_colour1 == "yellow") {
    console.log("the player earned 10 points");
} else if (alien_colour1 == "red") {
    console.log("the player earned 15 points");
} else {
    console.log("no data found");
}
//version 2
console.log("\n version 2");

{
    let alien_colour1: string = "green";
    if (alien_colour1 == "green") {
        console.log("the player earned 5 points");
    } else if (alien_colour1 == "yellow") {
        console.log("the player earned 10 points");
    } else if (alien_colour1 == "red") {
        console.log("the player earned 15 points");
    } else {
        console.log("no data found");
    }
}

//version 3
console.log("\n version 3");
{
    let alien_colour1: string = "yellow";
    if (alien_colour1 == "green") {
        console.log("the player earned 5 points");
    } else if (alien_colour1 == "yellow") {
        console.log("the player earned 10 points");
    } else if (alien_colour1 == "red") {
        console.log("the player earned 15 points");
    } else {
        console.log("no data found");
    }
}

//version 4
console.log("\n version 4");
{
    let alien_colour1: string = "blue";
    if (alien_colour1 == "green") {
        console.log("the player earned 5 points");
    } else if (alien_colour1 == "yellow") {
        console.log("the player earned 10 points");
    } else if (alien_colour1 == "red") {
        console.log("the player earned 15 points");
    } else {
        console.log("no data found");
    }
}

/* question :Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

let personAge: number = 64;
if (personAge < 2) {
    console.log("\n the person is a baby");
} else if (personAge >= 2 && personAge < 4) {
    console.log("\n the person is a toddler");

} else if (personAge >= 4 && personAge < 13) {
    console.log("\n the person is a kid");

} else if (personAge >= 13 && personAge < 20) {
    console.log("\n the person is a teenager");

} else if (personAge >= 20 && personAge < 65) {
    console.log("\n the person is a adult");

} else if (personAge >= 65) {
    console.log("\n the person is a elder");


}

/* question Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// Array of favorite fruits
let favorite_fruits: string[] = ["apple", "banana", "orange"];

// Check if each fruit is in the array of favorite fruits
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}

if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
}

if (favorite_fruits.indexOf("grape") !== -1) {
    console.log("You really like grapes!");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("You really like strawberries!");
}
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let usernames: string[] = ["arshad", "raza", "khalid", "hamid", "ahmed"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else { console.log(`Hello ${usernames[i]}, thank you for logging in again.`); }
}

/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/


{
    let usernames: string[] = [];
    if (usernames.length !== 0) {
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] == "admin") {
                console.log("Hello admin, would you like to see a status report?");
            }
            else { console.log(`Hello ${usernames[i]}, thank you for logging in again.`); }
        }
    }
    else if (usernames.length == 0) {
        console.log("we need to find some user");
    }
}
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//  let current_users :String []= ["asif",'ALI',"Navaid", 'ArShad'];
//  let new_users : string []=["ALu",'pyaz',"tamatr", 'arshad'];
//  let current_usersLower:string []= current_users.map(current => current.toLowerCase());
//  let new_usersLower:string []= new_users.map(newUser => newUser.toLowerCase());


// for (i=0; i<=(current_usersLower.length && new_usersLower.length); i++) {
//     if (users of current_usersLower ) {

//     }

// }
// List of current users
let current_users: string[] = ["john", "alice", "bob", "mary", "admin"];

// List of new users
let new_users: string[] = ["eric", "bob", "JOHN", "linda", "sam"];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Loop through the new users list
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user.toLowerCase();

    // Check if the new username is in the list of current users
    let index: number = current_users_lower.indexOf(new_user_lower);
    if (index !== -1) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}

/*Question Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

// Loop through numbers from 1 to 9
for (let i = 1; i <= 9; i++) {
    // Determine the proper ordinal ending for the current number
    let ordinalEnding: string;
    if (i === 1) {
        ordinalEnding = "st";
    } else if (i === 2) {
        ordinalEnding = "nd";
    } else if (i === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    // Print the number with its ordinal ending
    console.log(`${i}${ordinalEnding}`);
}


/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.*/

// Array containing favorite pizza names
let pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Print the name of each pizza
for (let pizza of pizzas) {
    console.log(pizza);
}

// Print a sentence using the name of each pizza
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Array containing names of animals
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal
console.log("Names of animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a sentence stating what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");


// Array containing names of animals
let petAnimals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal
console.log("Names of animals:");
for (let animal of petAnimals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of petAnimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a sentence stating what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");

/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
function make_shirt(size: string, messag: string) {
    console.log(`you will recieve shirt of size = ${size}, with printed massage = ${messag}`);

}
make_shirt("large","I am developer");

/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
function make_shirt1(size: string = "large", message: string = "I love TypeScript") {
    console.log(`You have ordered a ${size} T-shirt with the following message: "${message}".`);
}

// Create a large shirt with default message
make_shirt1();

// Create a medium shirt with default message
make_shirt1("medium");

// Create a shirt of any size with a different message
make_shirt1("small", "Dahi Lekr ata hun");


/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country*/
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York");



/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"*/
// function city_country(city:string,country:string) {
//     console.log(`"${city},${country}"`);   
// }
// city_country("Karachi","Pakistan");
// city_country("Paris","France");
// city_country("Sydney","Australia");

// function make_albumO(artist:string,title:string,tracks?:number){let album = {artist,title};
// if (tracks) {
//     album["tracks"]=tracks;}return album}
import inquirer from "inquirer";

// import chalk from 'chalk';
let answers = await inquirer.prompt([{
    name:"age",
    type:"number",
    message:"enter your age:"
}])
console.log("innsha Allah, in"+(20-answers)+'you will 20');
