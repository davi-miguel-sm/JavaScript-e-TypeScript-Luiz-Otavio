const pessoa = {
	nome: 'Davi',
	sobrenome: 'Miguel',
	idade: 21,
};

const pessoa2 = new Object();
pessoa2.nome = 'Davi';
pessoa2.sobrenome = 'Miguel';
pessoa2.idade = 22;

delete pessoa2.nome;
console.log(pessoa2);

console.log(pessoa.sobrenome);
console.log(pessoa['idade']);
const chave = 'nome';
console.log(pessoa[chave]);

const carro = new Object();

carro.marca = 'Ford';
carro.modelo = 'GT';
carro.motor = 'v8';

console.log(carro);
