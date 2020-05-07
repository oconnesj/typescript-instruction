import { Friend } from "../model/friend-list.class";

let friendArray = [];
let f1: Friend  = new Friend("Kevin Timmel", 29, "kevin.timmel@gmail.com", true);
friendArray.push(f1)
let f2: Friend  = new Friend("Nick", 28, "nick@gmail.com", );
friendArray.push(f2)
let f3: Friend  = new Friend("Kevin Flotner", 27, "kevin.flotner@gmail.com", );
friendArray.push(f3)



console.log("Name\tAge\tEmail\t\t\tBFF")
console.log("-----------------------------------------------------------");
for (let f of friendArray) {
    console.log(`${f.name}\t${f.age}\t${f.email}\t${f.bff}`);
}
  
/*
let f1: Friend  = new Friend("Kevin Timmel", 29, "kevin.timmel@gmail.com", true);
let f2: Friend  = new Friend("Nick", 28, "nick@gmail.com", );
let f3: Friend  = new Friend("Kevin Flotner", 27, "kevin.flotner@gmail.com", );
*/


