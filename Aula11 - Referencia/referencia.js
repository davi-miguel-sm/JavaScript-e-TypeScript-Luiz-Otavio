/* 
Valores primitivos não são passados por referencia
let a = 1
let b = a
a e b apontam para lugares diferentes na memória

Array, Object e Function são passados por referência
let c = [1,2,3]
let d = c
Alterando c ou d, altero as duas variáveis
*/

let c = [1, 2, 3];
let d = c;
let e = [...c]; // Eliminando a referência
console.log(c, d, e);

c.push(10);
d.pop();
d.push(25);
console.log(c, d, e);
