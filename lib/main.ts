class Dummy { 
    encode() { }
    decode() {}
}

/**@function dummy */
export default function dummy() {
    const dummy = new Dummy()
    return dummy
}
