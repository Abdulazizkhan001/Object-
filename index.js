// // Homework-1
// var fruits = ['apple', 12, 'Orange', 'Banana', 'Kiwi'];
// var counta = 0;
// for (var i = 0; i < fruits.length; i++) {
//     for (j = 0; j <= fruits.length; j++) {
//         fruits[i][j] === 'a' && counta++;
//     }
// }
// console.log(counta)

// // Homework-2
// var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6];
// let sum = 0;
// number.filter((value) => typeof value === 'number').map((value, index) => {
//     sum += value;
// })
// console.log(sum);
// // Homework-3.1
// var bigNum = [9, 45, 7, 18, 6, 2, 17, 8, 40, 'apple'];
// var copyBigNum = bigNum.sort((a, b) => a - b).filter((value) => typeof value === 'number');
// for (var i = 0; i < copyBigNum.length; i++) {
//     var maxNum = 0;
//     maxNum = copyBigNum[i - 1]
// }
// console.log(maxNum);
// // Homework-3.2

// for (var i = copyBigNum.length; i >= 0; i--) {
//     var minNum = 0;
//     minNum = copyBigNum[i + 1]
// }
// console.log(minNum);
// // Homework-4
// var toqson = 0;
// var juftson = 0;
// number.filter((value) => typeof value === 'number').map((value, index) => {
//     index % 2 === 0 ? juftson += value : toqson += value;
// })
// console.log('Juft son - ' + `${juftson}`, "  ", 'Toq son - ' + `${toqson}`);


let delNum = [12, 34, 54, 19, 2, 66, 44, 22];


// delNum.map((value)=>{
//     return newAr.unshift(value)
// })
// console.log(delNum);

// let newAr = [];
// for (let i = delNum.length - 1; i >= 0 ; i--) {
//         newAr.push(delNum[i])
    
//     }

// for( let i = 0; i <= delNum.length-1; i++)
// {
//     newAr.unshift(delNum[i])
// }
// console.log(newAr)

// var nm = [1,5,8,8,9,9]

// nm.fill(0,0,4)
// console.log(nm)
