import {readFile} from "fs"

//filename 을 받고 Promise 객체를 반환합니다.
export const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>((
        resolve: (value: string) => void,
        reject: (error: Error) => void
    ) => {
        readFile(filename, (error: Error, buffer: Buffer) => {
            if (error) reject(error);
            else resolve(buffer.toString());
        })

    });