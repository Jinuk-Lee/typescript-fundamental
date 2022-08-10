import {readFile, readFileSync} from "fs";
// @ts-ignore
import {readFilePromise} from "./read-file.promise";

console.log('파일을 비동기식으로 읽는 중..');
readFile('./package.json', (error: Error, buffer: Buffer) => {
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
});
console.log('파일을 동기식으로 읽는 중..');
const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

readFilePromise('./package.json')
    //패키지를 읽고 성공하면 출력하고 그다음 ts를 읽어서 성공했으면 출력
    //중복 if문과 비슷하지만 아래에서 에러를 모두 잡아준다는것이 차이점
    .then((value: string) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
const asyncFunction = async () => {
    const result = await readFilePromise('./package.json');
    console.log(result);
    const result2 = await readFilePromise('./tsconfig.json');
    console.log(result2);
}

asyncFunction()

