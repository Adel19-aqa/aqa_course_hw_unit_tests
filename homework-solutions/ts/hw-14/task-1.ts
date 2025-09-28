// 1. Создать дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа
function  wrapInArray<T> (value: T): T[]{
    return [value];
}
const numberArray = wrapInArray(5);
const stringArray = wrapInArray('Hello');

// 2. Создать дженерик функцию getLastElement, которая принимает массив элементов типа T и возвращает последний элемент (типа T)
function getLastItem<T> (array: T[]): T | undefined {
    return array.at(-1);
}
console.log(getLastItem([1, 2, 3, 4]));
console.log(getLastItem(['a', 'b', 'c']));

// 3. Создать дженерик интерфейс IPair, который принимает два типа T и U, и содержит поля first: T и second: U.
// реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.
interface IPair<T, U> {
    first: T;
    second: U;
}
function describePair<T, U> (pair: IPair<T, U>): string {
    return `${pair.first} and ${pair.second}`;
}
console.log(describePair({ first: 'Alice', second: 30 })); 