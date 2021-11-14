/* 

if (condition){
    //code
} else if (condition){
    //code
}

*/

const array = [2,3,4,5,6,7,8,9, 15, 20, 90]

console.log('else if')
array.forEach(item => {
    if (item%2 === 0){
        console.log(`O número ${item} é par`)
    } else if (item%5 === 0)
    console.log(`o número ${item} é divísilve por 5`)
})