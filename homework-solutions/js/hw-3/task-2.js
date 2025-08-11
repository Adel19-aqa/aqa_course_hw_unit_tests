/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let n = 1;
let nn = String(n) + String(n);
let nnn = String(n) + String(n) + String(n);
n + nn + nnn
//console.log(n + +nn + +nnn);

//or 
let m = 2;
let result = m + +(String(m) + String(m)) + +(String(m) + String(m) + String(m));
m + mm + mmm
//console.log(result);


const y = 3;
if (y < 1) {
 console.log("Choose 0 < y < 10");
} else if (y > 10) {
    console.log("Choose 0 < y < 10");
} else {
    console.log(y + +(String(y) + String(y)) + +(String(y) + String(y) + String(y)));
}