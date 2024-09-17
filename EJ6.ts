let numbers_array: number[] = [2, 10, 3, 50];
let cont: number = 1;
let adition: number = 0

for (let i in numbers_array) {
    let result: number = numbers_array[i]
    console.log('Número', cont++ ,':', result)
    adition += result
}
console.log('La suma de los numeros es:', adition)  
