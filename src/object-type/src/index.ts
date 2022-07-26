import {helloMessage, helloUser} from "./hello.methods";
// @ts-ignore
import user, {Person} from "./user";

helloMessage('World');
helloUser(user);

console.log(`Number of Person: ${Person.numberOfPerson}`);

const {name, age} = user;
console.log(name);
console.log(age);