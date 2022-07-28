import {occurErrorMethod} from "./occur-error.method";
import {printValue} from "./print-value";
import {Valuable} from "./valuable";

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