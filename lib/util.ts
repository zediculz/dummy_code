export interface Data {
    value: string,
    code: string
}

export interface Datas extends Data {}[]

export const datas = [
    { value: "0", code: "00" },
    {value: "1", code: "10"},
    {value: "2", code: "100"},
    {value: "3", code: "110"},
    {value: "4", code: "1100"},
    {value: "5", code: "0X"},
    {value: "6", code: "0X1"},
    {value: "7", code: "0X11"},
    {value: "8", code: "0XX"},
    {value: "9", code: "X"},
]