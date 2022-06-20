const numArr = [2,5,6,4,3,15,17,18,19,35,27]

//filter the odd values in the array

const filterOddNum = numArr.filter((x)=> x % 2 ===1)

console.log(filterOddNum)

// or 

// function isOdd(x){
//     return x % 2 
// }

// const filterOddNum = numArr.filter(isOdd)
// console.log(filterOddNum)

//filter the even values 

const filterEvenNum = numArr.filter((x)=> x % 2 === 0)
console.log(filterEvenNum)

//or

// function isEven(x){
//     return x % 2 ===0
// }

// const filterEvenNum = numArr.filter(isEven)
// console.log (filterEvenNum)