import { ActorService } from "../service/actor.service";
import { Actor } from "../model/actor.class";



export class AcotrListComponent {

}
let readline = require('readline-sync');
let actorSvc: ActorService = new ActorService();
let a1: Actor = new Actor();
a1.id = 1;
a1.firstName = "Keanu";
a1.lastName = "Reeves";
a1.gender = "Male";
a1.birthDate = "1964-09-02";


actorSvc.add(a1);

console.log("Welcome to bmdb Typescript!");
console.log("---------------------------");

let command: string = "";
while (command != "exit") {
    console.log("COMMAND MENU");
    console.log("---------------------------");
    console.log("list - list all acotrs");
    console.log("get - get a actor");
    console.log("add - add a actor");
    console.log("del - list all actor");
    console.log("exit - exit the app\n");
    command = readline.question("command?   ");

    switch (command) {
        case "list":
            console.log("Actor List:");
            console.log("---------------------------");
            actorSvc.list().forEach(actor => {
                console.log(actor.about());

            });
            break;
        case "get":
            console.log("Get a Actor by ID:");
            console.log("---------------------------");
            let id: number = readline.questionInt("Actor ID? ");
            let actor: Actor = actorSvc.get(id);
            console.log(actor.about());
            break;
        case "add":
            console.log("Add an Actor:");
            console.log("---------------------------");
            id = readline.questionInt("ID?  ");
            let firstName: string = readline.question("First Name: ");
            let lastName: string = readline.question("Last Name:  ");
            let gender: string = readline.question("Gender (male/female): ");
            let birthDate: string = readline.question("Birth Date (yyyy-mm-dd): ")
            actor = new Actor(id, firstName, lastName, gender, birthDate);
            actorSvc.add(actor);
            break;
        case "del":
            console.log("Delete a Actor");
            console.log("---------------------------");
            id = readline.questionInt("ID?  ");
            actorSvc.delete(id);
            console.log("Actor Deleted")
            break;
        case "exit":
            break;
            default:
                console.log("Enter a valid command");
                break;
    }
}