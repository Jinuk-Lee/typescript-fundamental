import {occurErrorMethod} from "./occur-error.method";
import {printValue} from "./print-value";
import {IValuable, Valuable} from "./valuable";
import {parseNumber} from "./parse-number";
import {mergeObjects} from "./merge-objects";
import {ICircle, IRectangle, ISquare} from "./shape";
import {calculatorArea} from "./calculator-area";
import Fish from "./fish";
import {flyOrSwim} from "./fly-or-swim";
import Bird from "./bird";
import {readFile, readFileSync} from "fs";
import {readFilePromise} from "./read-file.promise";
//
//
// try {
//     //에러가 발생하는 부분
//     occurErrorMethod();
// } catch (e) {
//     //에러가 처리되는 부분
//     console.log(e.message);
// } finally {
//     //무조건 실행되는 부분
//     console.log('무조건 실행됩니다.');
// }
// printValue(new Valuable<number>(1));
// //제네릭 사용시에는 객체 뒤에 타입제한을 걸어주는게 좋다.
// printValue(new Valuable(true));
// printValue(new Valuable('hello'));
// printValue(new Valuable([1, 2, 3]));
//
// const result: number = parseNumber(new Valuable('123'));
// console.log(result);
//
// parseNumber<String, IValuable<String>>(new Valuable<string>('123'))
//
// //대수 데이터 타입 교집합 수행
// type INameable = {
//     name: string;
// };
//
// type IAgeable = {
//     age: number;
// };
//
// const objectWithNameAndAge: INameable & IAgeable = mergeObjects(
//     {name: 'Jinuk'}, {age: 24}
// );
// console.log(objectWithNameAndAge);
//
// const square: ISquare = {tag: 'square', size: 10};
// const rectangle: IRectangle = {tag: 'rectangle', width: 4, height: 5};
// const circle: ICircle = {tag: 'circle', radius: 10};
//
// console.log(
//     calculatorArea(square),
//     calculatorArea(circle),
//     calculatorArea(rectangle)
// )
//
// const bird: Bird = new Bird();
// const fish: Fish = new Fish();
//
// flyOrSwim(bird);
// flyOrSwim(fish);

//
// console.log('파일을 비동기식으로 읽는 중..');
// readFile('./package.json', (error: Error, buffer: Buffer) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(buffer.toString());
//     }
// });
// console.log('파일을 동기식으로 읽는 중..');
// const buffer: Buffer = readFileSync('./package.json');
// console.log(buffer.toString());

readFilePromise('./package.json')
    //패키지를 읽고 성공하면 출력하고 그다음 ts를 읽어서 성공했으면 출력
    .then((value: string) => {
        console.log(value);
        throw new Error('Hello error');
        return readFilePromise('./tsconfig.json');
    })
    .then((value: string) => {
        console.log('print tsconfig.json');
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });