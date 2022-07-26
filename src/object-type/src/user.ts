export class Person implements IPerson {

    static numberOfPerson: number = 0;

    constructor(public name: string, public age: number) {
        Person.numberOfPerson++;
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    sayAge() {
        console.log(`My age is ${this.age}`);
    }
}

const user: Person = new Person('Jinuk', 24);

export interface IPerson {
    sayName(): void;

    sayAge(): void;
}