// defineProperty -- defineProperties
// Object.getOwnPropertyDescriptor -> Visualiza as propriedades da variavel
function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;
	// this._estoque = estoque;

	Object.defineProperty(this, 'estoque', {
		value: estoque,
		enumerable: true,
		writable: false, //somente alterar o valor da variavel
		configurable: false, // Controla a reconfiguraçao (Tbm controla se apaga)
	});
}

const produto1 = new Produto('carne', 10.5, 3);
console.log(produto1);
