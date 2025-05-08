export type DummyCodeValue = any

export interface Data {
    value: string,
    code: string
}

export interface Datas extends Data {}[]

export const number = [
    { value: "0", code: 50 },
    {value: "1", code: 51},
    {value: "2", code: 52},
    {value: "3", code: 53},
    {value: "4", code: 54},
    {value: "5", code: 55},
    {value: "6", code: 56},
    {value: "7", code: 57},
    {value: "8", code: 58},
    { value: "9", code: 59 }
]


export const alpha = [
    { value: "a", code: 1 },
    {value: "b", code: 2 },
    {value: "c", code: 3},
    {value: "d", code: 4},
    {value: "e", code: 5},
    {value: "f", code: 6},
    {value: "g", code: 7},
    {value: "h", code: 8},
    {value: "i", code: 9},
    { value: "j", code: 10 },
    { value: "k", code:11},
    {value: "l", code: 12},
    {value: "m", code: 13},
    {value: "n", code: 14},
    {value: "o", code: 15},
    {value: "p", code: 16},
    {value: "q", code: 17},
    {value: "r", code: 18},
    {value: "s", code: 19},
    { value: "t", code: 20 },
    { value: "u", code: 21 },
    {value: "v", code: 22},
    {value: "w", code: 23},
    {value: "x", code: 24},
    {value: "y", code: 25},
    {value: "z", code: 26},
]

const alphas:any[] = []
alpha.map((d) => {
    const bin = d.code.toString(2)
    const obj = {
        value: d?.value,
        code: d?.code,
        bin
    }

    alphas.push(obj)
})


const numbers:any[] = []
number.map((d) => {
    const bin = d.code.toString(2)
    const obj = {
        value: d?.value,
        code: d?.code,
        bin
    }

    numbers.push(obj)
})


export const datas = [...numbers, ...alphas]