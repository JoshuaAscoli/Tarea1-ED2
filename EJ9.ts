import { Person } from "./EJ8";
const person = new Person('Joshua', 20, 'Xela')
person.show_information();

console.log(person.get_name())
console.log(person.get_age())
console.log(person.get_city())

person.set_Name('Carlos')
person.set_Age(19)
person.set_City('Huehue')
person.show_information();


