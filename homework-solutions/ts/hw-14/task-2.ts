// Написать функцию, реализующий метод массивов map. Функция принимает на вход массив и коллбек. Исп дженерик типы.
// Затипизировать надо саму функцию и коллбек.
// Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
// где каждый элемент - это элемент исходного массива умноженный на его индекс
// пример:
// map([1,2,3,4,5], callback) => [0,2,6,12,20]

type MapCallback<T, U> = (el: T, index: number, array: T[]) => U;

function map<T, U> (array: T[], callback: MapCallback<T,U>): U[] {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
const result = map([1, 2, 3, 4, 5], (el, index) => el * index);
console.log(result);