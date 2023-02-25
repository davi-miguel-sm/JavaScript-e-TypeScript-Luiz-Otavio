/* eslint-disable */

//Tipos básicos (Existe inferência de tipos nesses casos)
let nome: string = 'Davi'; //Qlqr string `` '' "";
let idade: number = 0b1010; //10, 1.57, -5.55, 0xf00d, 0o7744, 0b1010
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('*');
let big: bigint = 100n;

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4];
let arrayDeNumeros2: number[] = [1, 2, 3, 4];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Davi Miguel',
  idade: 21,
  adulto: true,
};

console.log(pessoa.adulto);

function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
const resultado = soma2(10, 10);
console.log(resultado);
