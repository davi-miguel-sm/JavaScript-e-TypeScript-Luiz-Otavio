// defineProperty -- defineProperties
function Produto(nome, preco, estoque) {
	let estoquePrivado = estoque;
	this.nome = nome;
	this.preco = preco;

	Object.defineProperty(this, 'estoque', {
		enumerable: true,
		configurable: false,
		get: function () {
			return estoquePrivado;
		},
		set: function (valor) {
			if (typeof valor !== 'number') {
				throw TypeError('Só é aceito valores do tipo Number!');
			}
			estoquePrivado = valor;
		},
	});
}

const produto1 = new Produto('carne', 10.5, 3);
console.log(produto1);

function criaProduto(nome) {
	return {
		get nome() {
			return nome;
		},
		set nome(valor) {
			nome = valor;
		},
	};
}

produto2 = criaProduto('Abroba');
console.log(produto2.nome);
