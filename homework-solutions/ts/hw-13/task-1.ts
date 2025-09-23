// 1. Объявите переменные
let num1: number = 42;
let str: string = "Hello, TypeScript!";
let isComplete: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5]; 
let cities: string[] = ["Minsk", "Warsaw", "London"];
let cities2: Array<string> = ["Minsk", "Warsaw", "London"];
const person: {name: string, age: number, city: string} = {
    name: "Alice",
    age: 30,
    city: 'Minsk',
};

// 2. Создайте псевдомины типов:
type User = {
    name: string;
    age: number;
    email?: string;
};
type Grade = "junior" | "middle" | "senior";

// 3. Создайте интерфейс
interface ICar {
    brand: string,
    model: string,
    year?: number,
};

// 4. Создайте интерфейсы для:
interface IAddress {
    street: string,
    city: string,
    zipCode: number,
};
interface FullAddress extends IAddress {
    country: string;
};

// 5. Создайте объединение типов:
type Product = {
    id: number,
    name: string,
    price: number,
};
type DiscountedProduct = {
    discount: number,
} & Product;

// 6. Создайте функцию
function calculateDiscount(product: DiscountedProduct): number {
    return product.price - (product.price * product.discount / 100)
}
const product: DiscountedProduct = {
        id: 1,
        name: "Laptop",
        price: 1000,
        discount: 10,
};
console.log(calculateDiscount(product));
