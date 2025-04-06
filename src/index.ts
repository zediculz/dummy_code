import './style.css'

import { dummyCode } from "../lib/main.ts"


const code = dummyCode.encode("58")
console.log("code: ", code)

const res = dummyCode.decode(code)
console.log("result", res)