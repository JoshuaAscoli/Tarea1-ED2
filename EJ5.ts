
function Saludo(name: string, age: number ): void {
    console.log('Me llamo', name,'y tengo', age, 'años. \n------------------------')
}
Saludo('Joshua', 20)

function Operacion(number1: number, number2: number): number {
    return number1 + number2;
}
let result = Operacion(20, 3)
console.log('El resultado de la suma es:', result)
