import './style.css'

import { dummyCode } from "../lib/main.ts"


const code = dummyCode.encode("a boy called harry")
console.log("code: ", code)


const cod = dummyCode.encode(1000)
console.log("cod: ", cod)

//const res = dummyCode.decode(code)
//console.log("result", res)