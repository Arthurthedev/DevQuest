// function makeArray(num:number) : number[] {
//     return[num]
// }

// const numbers = makeArray(10)

function makeArray<T>(item:T) : T[] {
    return[item]
}

const numbers = makeArray(10)