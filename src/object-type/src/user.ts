export class Person{
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
}
const user:Person= new Person('Jinuk',24);