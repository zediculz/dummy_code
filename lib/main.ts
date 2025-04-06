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
        if (typeof value === "number") {
            code += `${s?.code} `;
        } else {
            code += `${s?.code} `;
        }
    });

    return code;
}

function decipher(code: DummyCodeValue) {
    const wCodes = code.split(" ");
    const str: any[] = [];

    wCodes.flatMap((wCode: string) => {
        const coded = datas.filter((d: any) => d?.code === wCode);
        str.push(coded[0]?.value);
    });

    let value = "";

    str.flatMap((s: string) => {
        if (s !== undefined) {
            value += `${s}`;
        }
    });

    return value;
}

/**@class Dummy */
class Dummy {
    /**@method encode is used to decipher string to DummyCode @param value */
    encode(value: any): DummyCodeValue {
        return cipher(value);
    }

    decode(code: DummyCodeValue) {
        return decipher(code);
    }
}

/**@namespace dummy */
export const dummyCode = new Dummy();
