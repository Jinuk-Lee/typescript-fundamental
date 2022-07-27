import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import {makePerson} from "./person";

printHello();
printUser('Jinuk'
    , 24);
const person = makePerson('Jinuk'
    , 24);
console.log(person);