import './style.css'

import { dummyCode } from "../lib/main.ts"

const [bin, cod] = dummyCode.encode(1001)
console.log("bin: ", bin)
console.log("cod: ", cod)

const re = dummyCode.decode(bin)
console.log("result", re)