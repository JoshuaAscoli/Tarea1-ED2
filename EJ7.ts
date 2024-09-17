//Joshua Ascoli 1515522
function factorial(num: number): number {
    if (num===0 || num===1) {
        return 1;
    }
    return num * factorial(num-1)
}

let number: number = 0;
let result: number = factorial(number);
console.log('El factorial de', number, 'es', result);