export class Actor {
     id: number;
     firstName: string;
     lastName: string;
     gender: string;
     birthDate: string; 



	constructor(id: number = 0, firstName: string = "", lastName: string = "", gender: string= "", birthDate: string = "") {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
	}
/*
    about(): void{
        console.log(`${this.title}, rated ), was released 
        in ${this.year}. Directed by ${this.director}`);
        */

     about(): void{
         console.log(`Actor: ${this.firstName} ${this.lastName} is ${this.gender} and was born on ${this.birthDate} `);
     }   
}