import { datas } from "./util.ts"

function decipher(value:string) {
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

/**@class Dummy */
class Dummy { 
    encode(value:string) { 
       return decipher(value)
    }

    decode() { }
}

/**@namespace dummy */
export const dummyCode = new Dummy()