import {IValuable} from "./valuable";

export const parseNumber = <S, T extends IValuable<S>>(v: T):
    number => parseInt(v.value.toString());

