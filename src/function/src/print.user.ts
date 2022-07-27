type PrintUserFunc = (string, number) => void
export const printUser: PrintUserFunc = function(name: string, age: number): void {
    console.log(`User's name: ${name}`);
    console.log(`User's age: ${age}`);
};