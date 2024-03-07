var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// question no 1
var Name = "Arshad";
console.log("Hello ".concat(Name, ", would you like to learn some Python today?"));
// question no 2
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
// console.log(Name.t);
// Question no.3
var quote = "I don't believe in quotes, because my life depends upon me not in other's wording";
var author = "Arshad Raza";
// Question no.3
var famous_person = "Winston Churchill";
var message = "".concat(famous_person, " once said, \"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.\"");
console.log(message);
// Question no.3
var formattedString = "First line\tTab\nThird line";
console.log(formattedString);
// Question no.3
// Addition
console.log("Addition:");
console.log("5 + 3 = ".concat(5 + 3));
// Subtraction
console.log("\nSubtraction:");
console.log("10 - 2 = ".concat(10 - 2));
// Multiplication
console.log("\nMultiplication:");
console.log("4 * 2 = ".concat(4 * 2));
// Division
console.log("\nDivision:");
console.log("16 / 2 = ".concat(16 / 2));
// Question no.3
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Question no.3
var favoriteNumber = 7;
var message2 = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message2);
// Question no.3
// programming for fun
/* Name: Arshad Raza
Date: 25/02/2024*/
var comment = true;
if (comment == true) {
    console.log("I have passed");
}
else {
    console.log("I am failed");
}
// Question no.3
var friends = ["Asif", "Ali", "Akmal", "Navaid"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
// Question no.3
var friends1 = ["Asif", "Ali", "Akmal", "Navaid"];
var greeting = "hello ,";
for (var _i = 0, friends1_1 = friends1; _i < friends1_1.length; _i++) {
    var names = friends1_1[_i];
    console.log(greeting + names);
}
;
// Question no.3
var favTransport = ["bike", "car", "aeroplane"];
var favState = ["I like to ride ", "I will buy a ", "i will fly in "];
console.log(favState[0] + favTransport[0]);
console.log(favState[1] + favTransport[1]);
console.log(favState[2] + favTransport[2]);
// Question no.3
var guestName = ["Asif", "Ali", "Akmal", "Navaid"];
for (var guest in guestName) {
    console.log("Dear ".concat(guestName[guest], ", you are invited for dinner."));
}
// Question no.3
guestName.pop();
guestName.push("arshad");
console.log(guestName);
for (var guest in guestName) {
    console.log("Dear ".concat(guestName[guest], ", you are invited for dinner."));
}
;
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
for (var _a = 0, guestName_1 = guestName; _a < guestName_1.length; _a++) {
    var guest = guestName_1[_a];
    console.log("Dear ".concat(guest, ", you are invited for dinner."));
}
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestName.length > 2) {
    var removedGuest = guestName.pop();
    console.log("\nSorry, ".concat(removedGuest, ". We can't invite you to dinner this time."));
}
// Print messages to the two remaining guests
console.log("\nInvitations to Dinner:");
for (var _b = 0, guestName_2 = guestName; _b < guestName_2.length; _b++) {
    var guest = guestName_2[_b];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. We would be honored to have your presence."));
}
// Remove the last two names from the list
guestName.pop();
guestName.pop();
// Print the empty list
console.log("\nRemaining Guests:", guestName);
// array of place to visit
var visitPlaces = ["Saudia", "China", "Dubai", "Japan"];
console.log(visitPlaces);
console.log("\nsorted but no change in original");
console.log(__spreadArray([], visitPlaces, true).sort());
// original
console.log("\noriginal");
console.log(visitPlaces);
//reversed in alphabatic order but no change in original
console.log("\nreversed in alphabatic order but no change in original");
console.log(__spreadArray([], visitPlaces, true).sort().reverse());
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
var mountain = ["Everest", "K2", "Lhotse", "Manaslu"];
console.log("\nList of Mountains");
console.log(mountain);
// Question no.3
//data of student 1
var student = { Name: "arshad",
    Class: 14,
    age: 22,
    attendenceOfToday: true,
};
//data of student 2
var student1 = { Name: "asif",
    Class: 12,
    age: 22,
    attendenceOfToday: false,
};
console.log(student);
console.log(student1);
// Question no.3
var numbers = [1, 2, 3, 4, 5];
// Accessing an element at an out-of-bounds index
console.log(numbers[10]);
// Trying to access element at index 10, which doesn't exist
// Accessing an element at a valid index
console.log(numbers[2]); // Accessing element at index 2, which exists
// Question no.3
var student2 = "present";
console.log("Is student2== present?I pridicted true.");
console.log(student2 == "present");
var nextBallRun = 6;
console.log("will nextBallRun == 6? I pridict true");
console.log(nextBallRun == 6);
var tommorow = "monday";
console.log("Is tommorow== monday?I pridicted true.");
console.log(tommorow == "monday");
var attendClass = true;
console.log("will I attendclass? I pridicted true");
console.log(attendClass == true);
