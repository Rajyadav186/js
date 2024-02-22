const mcu=['Iron Man','Thor','Spider Man']
const dc=['Super Man','Flash','Batman']


//+++++Push ++++
// mcu.push(dc)
// console.log(mcu);
// console.log(mcu[3][0]);


//+++Concatinate+++++
// const multiverse=mcu.concat(dc)
// console.log(multiverse);


// //++++Spred oprater++++++
// const multiverse=[...mcu,...dc];
// console.log(multiverse)


const arr=[1,2,3,[4,5,6],7,[8,9,0],[34,64,[34,75,34],34]];
const usable_another_arr=arr.flat(Infinity)
console.log(usable_another_arr)

console.log(Array.isArray('Raj'))
console.log(Array.from('Raj'))
console.log(Array.from({name:'raj'}))

let score1=123
let score2=175
let score3=164
let score4=186

console.log(Array.of(score1,score2,score3,score4));