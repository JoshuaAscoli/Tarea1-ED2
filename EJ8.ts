//Joshua Ascoli 
export class Person{
    private name: string
    private age: number 
    private city: string

    constructor(name: string, age: number, city: string) {
        this.name = name 
        this.age = age
        this.city = city

    }
    //getters
    public get_name(): string {
        return this.name;
    }
    public get_age(): number {
        return this.age;
    }
    public get_city(): string {
        return this.city;
    }
    //setters
    public set_Name(name:string): void {
        this.name = name;
    }
    public set_Age(age: number): void {
        this.age = age;
    }
    public set_City(city: string): void {
        this.city = city;
    }

    //show information
    public show_information(): void {
        console.log('Nombre:', this.name, 'Edad:', this.age, 'Ciudad:', this.city)
    }
}

