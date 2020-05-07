import { Friend } from "../model/friend-list.class";

let friendArray = [];
let f1: Friend  = new Friend("Kevin Timmel", 29, "kevin.timmel@gmail.com", true);
friendArray.push(f1)
let f2: Friend  = new Friend("Nick Gochoel", 28, "nick.gochoel@gmail.com", );
friendArray.push(f2)
let f3: Friend  = new Friend("Kevin Flotner", 27, "kevin.flotner@gmail.com", );
friendArray.push(f3)
let f4: Friend  = new Friend("Ashley Brunner", 25, "ashley.brunner@gmail.com", );
friendArray.push(f4)
let f5: Friend  = new Friend("Karen O'Connell", 27, "karen.oconnell@gmail.com", true);
friendArray.push(f5)


console.log("==========================================================================");
console.log("Name\t\tAge\tEmail\t\t\t\t\tBFF")
console.log("==========================================================================");
for (let friend of friendArray) {
    console.log(`${friend.name}\t${friend.age}\t${friend.email}\t\t\t${friend.bff}`);
}
  
/*
let f1: Friend  = new Friend("Kevin Timmel", 29, "kevin.timmel@gmail.com", true);
let f2: Friend  = new Friend("Nick", 28, "nick.gochoel@gmail.com", );
let f3: Friend  = new Friend("Kevin Flotner", 27, "kevin.flotner@gmail.com", );
*/


