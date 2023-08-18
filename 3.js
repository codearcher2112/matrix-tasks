// 3
const arr = [
    ['Mercedes', 'Ferrari', 'Alfa Romeo'],
    ['Honda', 'Ford', 'FIAT'],
    ['Renualt', 'Porsche', 'Audi'],
];

function findWordInMatrix(arr, searchWord) {
    return arr.some(row => row.includes(searchWord));
}

console.log(findWordInMatrix(arr, 'Ford'));