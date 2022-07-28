import {occurErrorMethod} from "./occur-error.method";
import {printValue} from "./print-value";
import {IValuable, Valuable} from "./valuable";
import {parseNumber} from "./parse-number";
import {mergeObjects} from "./merge-objects";

try {
    //에러가 발생하는 부분
    occurErrorMethod();
} catch (e) {
    //에러가 처리되는 부분
    console.log(e.message);
} finally {
    //무조건 실행되는 부분
    console.log('무조건 실행됩니다.');
}
printValue(new Valuable<number>(1));
//제네릭 사용시에는 객체 뒤에 타입제한을 걸어주는게 좋다.
printValue(new Valuable(true));
printValue(new Valuable('hello'));
printValue(new Valuable([1, 2, 3]));

const result: number = parseNumber(new Valuable('123'));
console.log(result);

parseNumber<String, IValuable<String>>(new Valuable<string>('123'))

//대수 데이터 타입 교집합 수행
type INameable = {
    name: string;
};

type IAgeable = {
    age: number;
};

const objectWithNameAndAge: INameable & IAgeable = mergeObjects(
    {name: 'Jinuk'}, {age: 24}
);
console.log(objectWithNameAndAge);