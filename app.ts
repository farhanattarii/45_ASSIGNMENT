//       Question : 02
// let personName: string = "ERIC";
// console.log(`Hello ${personName} would you like to learn some python today?`);

//       Question : 03

// lower case
// var personNames : string = "Farhan";

// console.log("lowercase:", personName.toLowerCase());

// upper case

// console.log("uppercase:", personName.toUpperCase());

// Title case

// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//     Question : 04

// let quote : string = "A person who never made a mistake never tried anything new";
// let author : string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);

//         Question : 05


// let quotes : string =  "A person who never made a mistake never tried anything new.";
// let famous_Person = "Albert Einstein";
// let message = `${famous_Person} once said, "${quote}"`
// console.log(message);

//          Question : 06

// let persons_Name = "\t Md Farhan \n";
// console.log("Name with whitespace:");

// console.log(persons_Name);

// let stripped : string = persons_Name.trim();
// console.log("Name out whitespace:");

// console.log(stripped);

//          Question : 07 & 08

// console.log("Addition: 4 + 4 =", 4 + 4);

// console.log("Subtraction: 12 - 4 =", 12 - 4);

// console.log("Multiplication: 4 * 2 =", 4 * 2);

// console.log("Division: 16 / 2 =", 16 / 2);

//       Question : 09

// let favoriteNumber = 10;
// let messages = (`my favorite number is ${favoriteNumber}`)
// console.log(message);

//       Question : 10

// name: "FARHAN"
// Dated: 5/6/2024
// Description: "This program will multiplication"

// console.log(5 * 3);

// name: 'md Farhan'
// Dated: 5/6/2024
// Description: 'This program will run simple code just like hello world'

// console.log("hello world simple program");

//          Question : 11

// Store the names of your friends in an array called friendsName
// let friendsName:string[] = ["mohsin", "hassan",  "muzzammil Ustad", "jawad"];

// Print each friends name by accessing each element in the list, one at a time 
// console.log("List of Friends");
// console.log(friendsName[0]); // Prints the first name in the array
// console.log(friendsName[1]); // Prints the second name in the array
// console.log(friendsName[2]); // Prints the third name in the array
// console.log(friendsName[3]); // Prints the fourth name in the array

//         Question : 12

// let friendsNames = ["Muzzammil bhai", "rehan", "jawad", "mohsin"];
// let Message: string = "How are you: ";
// for (let i=0; i<friendsName.length; i++){
//   console.log(message + friendsName[i]);
// }

//  Question : 13

// let transportationModes = ["Aeroplane", "car", "sport bike", " kawasaki Ninja"];

// for (let i=0; i<transportationModes.length; i++){
//     console.log("I would like to own a " + transportationModes[i]+ ".");
// };

//           Question : 14
  
// let guest_List = ["Muzammil", "jawad", "hassan", "gulam Mustafa"];

// for (let i=0; i<guest_List.length; i++){
//     console.log("sallam sir: " + guest_List[i]+ ", \n\n we invited you on dinner tomorrow.It would be an honor to have your presence\nThank you\n");
// };

//           Question : 15

// let guests_List = ["Muzammil Ustad", "jawad", "hassan", "gulam Mustafa"];
// for (let i=0; i<guest_List.length; i++){
//     console.log("sallam sir: " + guest_List[i]+ ",\n\n we invited you on dinner tomorrow.It would be an honor to have your presence\nThank you\n");
// };

// let not_present:string = "jawad";
// let new_guest: string =  "Mohsin";
// guest_List[1] = new_guest;

// for (let i=0; i<guest_List.length; i++){
//     console.log("sallam sir: " + guest_List[i]+ ",\n\n we invited you on dinner tomorrow.It would be an honor to have your presence\nThank you\n");
// }

// console.log(`Mr. ${not_present} will not coming tomorrow dinner. `);

//          Question : 16

// let guest_Lists = ["Muzammil Ustad", "jawad", "hassan", "gulam Mustafa"];
// let not_Present:string = "jawad";
// let new_Guest: string =  "Mohsin";
// guest_List[1] = new_guest;
// for (let i=0; i<guest_List.length; i++){
//     console.log("sallam sir: " + guest_List[i]+ ",\n\n we invited you on dinner tomorrow.\nThank you\n");
// };

// guest_List.unshift("hamza" )
// let middleIndex = Math.floor(guest_List.length / 2);
// guest_List.splice(middleIndex, 0 , "Furqan");
// guest_List.push("rehan")

// for (let i=0; i<guest_List.length; i++){
//     console.log("sallam sir: " + guest_List[i]+ ",\n\n we invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank you\n");
// };

//             Question : 17

// let guest_List = ["Muzammil Ustad", "jawad", "hassan", "gulam Mustafa"];
// let not_present:string = "jawad";
// let new_guest: string =  "Mohsin";
// guest_List[1] = new_guest;

// let middleIndex = Math.floor(guest_List.length / 2);
// guest_List.splice(middleIndex, 0 , "Furqan");

// console.log("Due to unforeseen circumstances, we can only invite two guests for dinner.");


// console.log("\nunfortunately we can not arrange big table , Only two people allow. ");

// while(guest_List.length > 2){
//     let remove_guest = guest_List.pop();
//     console.log(`sorry sir .${remove_guest} you are not invited  for dinner. `);
// }

// for (let i=0; i<guest_List.length; i++){
//     console.log(" sir: " + guest_List[i]+ ",\n\nYes you are still invited on tomorrow dinner\nThank you\n");
// };
// guest_List.pop();
// guest_List.pop();
 
// console.log(`Guest list after the dinner: ${guest_List}[]`);

//        Question : 18

// Making a Array of Countries and Print its Original Order
// let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
// console.log("Original Order:", countriesToVisit );

// // print the array in Alphabetical Order without modifying the Actual Array List 
// console.log("Alphabetical order:", [...countriesToVisit].sort());

// // // Show that the array is Still in Orginal Order   
// console.log("Still in Orginal order:", countriesToVisit);

// // Print the Array in Reversed Order modifying the Actual Array List
// console.log("Reverse Order:", [...countriesToVisit].reverse());

// // Show that the array is Still in Orginal Order
// console.log("Still in Orginal order:", countriesToVisit);

// // We have Changed the Orginal Array Order Now
// console.log("Orginal Array Reversed:", countriesToVisit.reverse());

// // Print the array to show that it,s back to its orginal order
// console.log("Back to Orginal Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed  in Alphabetical order now
// console.log("Shorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Orginal Array Order again
// console.log("Orginal Array Reversed Again:", countriesToVisit.reverse());

//       Question : 19

// let guestList = ["Muzammil Ustad", "jawad", "hassan", "gulam Mustafa", "daniyal nagori"];

// guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`)); 

// let lengthGuests: number = guestList.length;

// console.log(`We are Inviting total ${lengthGuests} guests.`);

//        Question : 20

// // Making a Programming Languages Array
// let programmingLanguages: string[] = ["Swift", "C++", "Java","Javascript", "Typescript"];

// // Print the Message of List
// console.log("List Of Programming Languages:");

// // Print the Values of Array in the Form of List
// programmingLanguages.forEach(Language => console.log(Language));

//          Question : 21

// interface itCourse {
//     courseName: String;
//     location: string;
//     onSiteStudents: number;
// }

// let itCourse = {
//     courseName : "Typescript and Javascript",
//     location : "Governor House Sindh",
//     onSiteStudents : 50000
// };

// console.log(itCourse);

//           Question : 22

// // Creating a Array
// let errorArray: string[] = ["sir zia khan", "daniyal nagori", "Muzammil Ustad", "Farhan"];

// // Producing Error ! by Accessing invaild index pf array 
//  console.log(errorArray[8]);

// //  // Error Removed
// console.log(errorArray[2]);

//           Question : 23

// // Making a  Variebles
// let five = 5;

// let ten = 10;

//        // Test 1
// console.log("Test 1: five is equal to 5?");
// console.log(five == 5);

//        // Test 2
// console.log("\nTest 2: ten is equal to 10?");
// console.log(ten == 10);

//        // Test 3
// console.log("\nTest 3: 5 is not equal to 10");
// console.log(five != 10);

//        // Test 4
// console.log("\nTest 4: 10 is greater than 5");
// console.log(ten > 5);

//        // Test 5 
// console.log("\nTest 5: 5 is smaller than 10");
// console.log(five < ten);

//        // Test 6
// console.log("\nTest 6: 10 is smaller than 5");
// console.log(ten < 5);

//        // Test 7
// console.log("\nTest 7: 5 is equal 8");
// console.log(five == 8); 

//        // Test 8
// console.log("\nTest 8: 10 is not equal to 10");
// console.log(ten != ten);

//        // Test 9
// console.log("\nTest 9: six is greater than 9");
// console.log(6 > 9);

//        // Test 10
// console.log("\nTest 10: 100 is smaller than 80");
// console.log(100 < 80);

//            Question : 24

 // Define Variables
//  let apple = "apple";
//  let uppercaseApple = "APPLE";
//  let ten = 10;
//  let twenty = 20;
 
 // Test is equality and inequality with string
 
 // console.log("Is apple is equal to apple?");
 // console.log(apple == "apple");
 
 // console.log("\nIs apple is not equal to apple?");
 // console.log(apple != "apple");
 
 //  Tests using the lower case function
 
 // console.log("\nIs APPLE is equal to apple after converting to lowercase?");
 // console.log(uppercaseApple.toLowerCase() == "apple");
 
 // console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
 // console.log(uppercaseApple.toLowerCase() != "apple");
 
 // // Numerical Test
 // // Equal to
 // console.log("\n Is ten is equal to twenty?");
 // console.log(ten == twenty);
 
 // // Not Equal to 
 // console.log("\n Is ten is not equal to twenty?");
 // console.log(ten != twenty);
 
 // // Greater than
 // console.log("\n Is ten is greater than zero?");
 // console.log(ten > 0);
 
 // // Less than
 // console.log("\n Is twenty is less than 10?");
 // console.log(twenty < 10);
 
 // // Greater than or Equal to
 // console.log("\nIs ten is greater than or equal to 5?");
 // console.log(ten >= 5);
 
 // // Less than or Equal to
//  console.log("\n twenty is less than or equal to 9?");
//  console.log(twenty <= 10);
 
 // // Test using "and" & "or" Operators
//  console.log("\n twenty is not equal to 10 and twenty is greater than 10");
//  console.log(twenty != 10 && twenty < 10);

//           Question : 25

// // Create a variable to store the alien's color
// let alien_color = 'green';

// // Check if the alien's color is green
// if (alien_color ==='green') {
//     // Print a message that the player earned 5 points
//     console.log("Congratulations! You just earned 5 points!");
    
// }
// // that fails the if test
// alien_color = 'red'

// if (alien_color == 'green'){
//     console.log;("Congratulations! You just earned 5 points.")
// };

//           Question : 26

/**** version 1 that runs the if block: ***/
// let alien_color = 'green'

// if (alien_color == 'green'){
//    console.log("Congratulations! You just earned 5 points for shooting the alien.")
// }else{
//     console.log("You just earned 10 points.");
// }

/**** version 2 that runs the else block: ***/
//  alien_color = 'yellow'

// if (alien_color == 'green'){
//    console.log("Congratulations! You just earned 5 points for shooting the alien.")
// }else{
//     console.log("You just earned 10 points.");
// };

//            Question : 27

// // Green alien version
// let alien_color = 'green'
// if (alien_color =="green" ) {
//     console.log("You earned 5 points. ");
// }else if (alien_color == "yellow") {
//     console.log("You earned 10 points. ");   
// }else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }
//  // yellow alien version
// alien_color = 'yellow'
// if (alien_color =="green" ) {
//     console.log("You earned 5 points. ");
// }else if (alien_color == "yellow") {
//     console.log("You earned 10 points. ");   
// }else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }

// // red alien version
// alien_color = 'red'
// if (alien_color =="green" ) {
//     console.log("You earned 5 points. ");
// }else if (alien_color == "yellow") {
//     console.log("You earned 10 points. ");   
// }else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }

//            Question : 28

// let age: number = 25

// if (age < 2 ) {
//     console.log("The  person is a baby.");
// }else if (age < 4) {
//     console.log("The  person is a toddler.");
// }else if (age < 13) {
//     console.log("The  person is a kid.");
// }else if (age < 20 ) {
//     console.log("The  person is a teenager.");
// }else if (age < 65) {
//    console.log("The person is an adult ");
// }else{
//     console.log("This person is an elder");
// }

//             Question : 29

// const favorite_fruits :string[]=["apple", "mango", "banana"];

// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes("mango")) {
//     console.log("You really like  mangoes!");
// }
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas !");
// }
// if (favorite_fruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }else{
//     console.log("You don't really like strawberries.");
    
// }

// if (favorite_fruits.includes("grapes")) {
//     console.log("You really like grapes!");
// }else{
//     console.log("You don't really like grapes.");
    
// }

//             Question : 30 

// // Array of usernames
// const usernames : string[]=["admin", "farhan", "sir daniyal", "sir ziakhan", "sir ameenalam"];

// // Loop through the array and print greetings
// for (const username of usernames) {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");   
//     }else{
//         console.log(`Hello ${username}, thank you for logging in again`);
//     }
// };

//             Question : 31

// let usernames: string[] = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     console.log("Greet users");
// }
// Removing all usernames ensures the message "We need to find some users!" is printed

//              Question : 32


// const currentUser: string[] = ["Aqib", "Talha", "Arooj", "Wajeeha", "Shoaib"];
// const newUser: string[] = ["AROOJ", "WAJEEHA", "Shaheer", "Safdar", "Shummas"];

// for (let i = 0; i < newUser.length; i++) {
//   let available = true;
//   for (let j = 0; j < currentUser.length; j++) {
//     if (newUser[i].toLowerCase() === currentUser[j].toLowerCase()) {
//       console.log(
//         `Please enter a new user name, ${newUser[i]} is already taken.`
//       );
//       available = false;
//       break;
//     }
//   }
//   if (available) {
//     console.log(`The user name  ${newUser[i]}  is available.`);
//   }
// }

//            Question : 33

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let suffix = "th"

// numbers.forEach(number => {
//     if (number === 1) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });

//            Question : 34

// let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

// pizzas.forEach(pizza => {
//     console.log(`I like ${pizza} pizza.`);
// });
// console.log("I really love pizza!");

//            Question : 35

// let animals = ["Dog", "Cat", "Rabbit"];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }
// for (let i = 0; i < animals.length; i++) {
//     console.log(`A  ${animals[i]}  would make a great pet.`);
// }

// console.log("Any of these animals would make a great pet!");

//             Question : 36

// function make_shirt(size: string, message: string) {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }

// make_shirt("large", "code is life");

//             Question : 37

// function make_shirt(size: string = "large", message:string = "I love Typescript") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);   
// }

// make_shirt(); // Default large and message
// make_shirt("medium"); // Default message, medium size
// make_shirt("small", "Dive into Coding"); // Custom message, small size

//            Question : 38

// function describe_city(city: string, country: string = "Pakistan") {
//     console.log(`${city} is an ${country}`);
// }

// // Function ko call karke teen alag-alag shehron ke liye description print karenge
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("New York", "USA");

//             Question : 39

// function city_country(city: string, country:string):string {
//     return `${city} , ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan")); // Output: "Lahore, Pakistan"
// console.log(city_country("Tokyo", "Japan")); // Output: "Tokyo, Japan"
// console.log(city_country("Paris", "France")); // Output: "Paris, France"

//             Question : 40

// type Album = {
//     artist: string;
//     title: string;
//     tracks?: number; // Optional tracks property
// };
// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title, tracks};
//     if (tracks) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));

//             Question : 41

// let magicians: string[] = ["Alice", "David", "Chris"];

// function show_magicians(magicians: string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }

// show_magicians(magicians);

//             Question : 42

// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }
// function show_magicians(magicians: any) {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// let magicians = ["Alice", "David", "Chris"];
// make_great(magicians);

// // Display modified magicians
// show_magicians(magicians);

//            Question : 43

// // Function to display magicians
// function show_magicians(magicians:any) {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Original array of magicians
// let magicians = ["Alice", "David", "Chris"];

// // Function to modify magicians array by adding "the Great" to each magician's name
// function make_great(magicians:any) {
//     let greatMagicians: any = [];
   
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(`${magicians[i]} the Great`);
//     }
    
//     return greatMagicians;
// }

// // Create a new modified array
// let greatMagicians = make_great(magicians);

// // Display original magicians
// console.log("Original magicians:");
// show_magicians(magicians);

// // Display modified magicians
// console.log("Great magicians:");
// show_magicians(greatMagicians);

//          Question : 44

// function make_sandwich(...items: string[]) {
//     console.log(`Making a sandwich with: ${items.join(' , ')}.`);
// }

// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "lettuce", "tomato");
// make_sandwich("avocado", "sprouts", "mustard", "mayo");

//            Question : 45

// interface Car {
//     manufacturer: string;
//     model: string;
//     [key: string]: any; // Allow arbitrary additional properties
// }

// function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
//     const car: Car = { manufacturer, model };
//     extras.forEach(([key, value]) => {
//         car[key] = value;
//     });
//     return car;
// }

// // Function call with required information and additional properties
// const car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// // Print the returned object to check if all information was stored correctly
// console.log(car);