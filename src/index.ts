import './style.css'

import { dummyCode } from "../lib/main.ts"

const [bin, cod] = dummyCode.encode("10010")
console.log("bin: ", bin)
console.log("cod: ", cod)

const re = dummyCode.decode(cod)
console.log("result", re)