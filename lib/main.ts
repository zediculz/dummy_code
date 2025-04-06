import { datas, DummyCodeValue } from "./util.ts"

function cipher(value:string):DummyCodeValue {
    const words = value.split(" ")
    const str:any[] = []
    
    words.flatMap((word: string, i: number) => {
        const letters = word.split("")
        letters.flatMap((letter: string, i: number) => {
            const coded = datas.filter((d: any) => d?.value === letter)
            str.push(coded[0].code)
        })

        //console.log(letters)
    })

    let code = ''

    str.flatMap((s: string) => {
       code += `${s} `
    })
    
    return code
}

function decipher(code:DummyCodeValue) {
    const wCodes = code.split(" ")
    const str:any[] = []
    
    wCodes.flatMap((wCode: string, i: number) => {
        const coded = datas.filter((d: any) => d?.code === wCode)
        str.push(coded[0]?.value)
    })

    let value = ''

    str.flatMap((s: string) => {
        if (s !== undefined) {
            value += `${s}`
        }
    })
    
    return value
}

/**@class Dummy */
class Dummy { 
    /**@method encode is used to decipher string to DummyCode @param value */
    encode(value:string):DummyCodeValue { 
       return cipher(value)
    }

    decode(code: DummyCodeValue) {
        return decipher(code)
     }
}

/**@namespace dummy */
export const dummyCode = new Dummy()