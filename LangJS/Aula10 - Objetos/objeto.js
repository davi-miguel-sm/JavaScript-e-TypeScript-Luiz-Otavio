const pessoa1 = {
	nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 25,
};

const pessoa2 = {
	nome: 'Maria',
	sobrenome: 'Anchieta',
	idade: 34,
};

function criaObjeto(nome, sobrenome, idade) {
	return {
		nome,
		sobrenome,
		idade,
		fala() {
			console.log(`Meu nome é ${this.nome} ${this.sobrenome}.`);
		},
	};
}

const pessoa01 = criaObjeto('Jime', 'Neutron', '10');

pessoa01.fala();
