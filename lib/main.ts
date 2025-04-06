import { datas, DummyCodeValue } from "./util.ts";

function cipher(value: any): DummyCodeValue {
    const w = typeof value === "number" ? value.toString() : value;

    const words = w?.split(" ");
    const str: any[] = [];

    words.flatMap((word: string) => {
        const letters = word.split("");

        letters.flatMap((letter: string) => {
            const coded = datas.filter((d: any) => d?.value === letter);

            if (coded.length !== 0) {
                str.push({ bin: coded[0].bin, code: coded[0].code });
            }
        });

        //console.log(letters)
    });

    let code = "";

    str.flatMap((s) => {
        code += `${s?.code} `;
    });

    return code;
}

function decipher(code: DummyCodeValue) {
    const wCodes = code.split(" ");
    const str: any[] = [];

    wCodes.flatMap((wCode: string) => {
        const coded = datas.filter((d: any) => d?.code?.toString() === wCode);
        
        if (coded.length !== 0) {
            str.push({ value: coded[0].value, code: coded[0].code });
        }
    });

    let value = "";

    str.flatMap((s: any) => {
        if (s !== undefined) {
            value += `${s?.value}`;
        }
    });

    return value;
}

/**@class Dummy */
class Dummy {
    /**@method encode is used to cipher value to DummyCode @param value */
    encode(value: any): DummyCodeValue {
        return cipher(value);
    }

    /**@method decode is used to decipher DummyCode to value @param code */
    decode(code: DummyCodeValue) {
        return decipher(code);
    }
}

/**@namespace dummy */
export const dummyCode = new Dummy();
