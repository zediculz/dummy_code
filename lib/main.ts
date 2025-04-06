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
                str.push(coded[0]);
            }
        });

        //console.log(letters)
    });

    let code = "";
    let bin = "";

    str.flatMap((s) => {
        bin += `${s?.bin} `;
        code += `${s?.code} `;
    });

    return [bin, code]
}

function middleWare(dec:any) {
    console.log(dec)
}

function decipher(code: DummyCodeValue) {
    const wCodes = code.split(" ");
    const str: any[] = [];

    wCodes.flatMap((wCode: string) => {
        const binned = datas.filter((d: any) => d?.bin?.toString() === wCode);
        const coded = datas.filter((d: any) => d?.code?.toString() === wCode);
        
        if (coded.length !== 0) {
            str.push(coded[0]);
        } else if(binned.length !== 0) {
            str.push(binned[0]);
        }
    });

    let value = "";

    str.flatMap((s: any) => {
        if (s !== undefined) {
            value += `${s?.value}`;
        }
    });

    middleWare(str)
    return value;
}

/**@class Dummy */
class Dummy {
    /**@method encode is used to cipher value to DummyCode @param value */
    encode(value: any): DummyCodeValue {
        const ciph =  cipher(value);
        return ciph
    }

    /**@method decode is used to decipher DummyCode to value @param code */
    decode(code: DummyCodeValue) {
        const deciph = decipher(code);
        return deciph
    }
}

/**@namespace dummy */
export const dummyCode = new Dummy();
