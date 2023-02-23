const nome = 'Davi Miguel';
const idade = 21;
const peso = 92;
const altura = 1.85;
let imc;

imc = peso / altura ** altura;
console.log(
	`${nome} tem ${idade} anos, pesa ${92}kg e tem ${altura} de altura. \n Seu imc é de ${imc.toFixed(
		2,
	)}`,
);
