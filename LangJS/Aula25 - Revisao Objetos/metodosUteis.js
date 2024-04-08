//Object.keys => Chaves
//Object.values => valor
//Object.entries => Chaves e Valores
//Object.freeze => Congela o Objeto

let produto = { nome: 'egua', preco: 1000 };
let outroProduto = produto;
// outroProduto.nome = 'Cavalo';
// outroProduto.preco = 2000;

// Apontam para o mesmo endereço na memoria
// N vira uma copia dos valores e sim uma referencia

//Forma de Resolver
outroProduto = { ...produto }; //Operador Spread
outroProduto.nome = 'Cavalo';
outroProduto.preco = 2000;

console.log(produto);
console.log(Object.entries(produto));
console.log(Object.keys(produto));
console.log(Object.values(produto));
// Object.freeze(produto);
// produto.nome = 'Aopa'; //N funciona, mas n gera erro

// Destructuring com Object.entries
for ([chave, valor] of Object.entries(produto)) {
	console.log(chave[0] + valor);
}
