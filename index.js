var user = {
    id: 1,
    year: 2010,
    name: 'Otabek',
    age: 21,
    key: 'test'
}

var NAMDU = [{
    id: 1,
    year: 2010,
    name: 'Otabek',
    age: 21,
    key: 'test'
},
{
    id: 2,
    year: 2011,
    name: 'Iqbol',
    age: 21,
    key: 'test'
},
{
    id: 3,
    year: 2012,
    name: 'Zokir',
    age: 21,
    key: 'test'
}
];

key = 'name';
//     By id
// const onDelete = (id) => {
//     for (let i = 0; i < NAMDU.length; i++) {
//         if (id === NAMDU[i].id) {
//             return NAMDU[i];
//         }
//     }
// }
// console.log(onDelete(3))

//     By name
const onDelete = (name) => {
    for (let i = 0; i < NAMDU.length; i++) {
        if (name === NAMDU[i].name) {
            return NAMDU[i];
        }
    }
}
console.log(onDelete('Zokir'))



// //        By year
// const onDelete = (year) =>{

// }
// console.log(onDelete(2012))










