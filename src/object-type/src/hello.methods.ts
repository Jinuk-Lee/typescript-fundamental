import {IPerson} from "./user";

export function helloMessage(message: string): void {
    console.log(`Hello ${message}`);
}

export function helloUser(user: IPerson): void {
    user.sayName();
    user.sayAge();
}
