// for classico
for (let i = 0; i < 10; i++) {
	console.log('O que fazer?');
}

//novas formas de for

const frutas = ['banana', 'maçã', 'pera', 'uva'];

// for in - Pega o indice do array

for (let indice in frutas) {
	console.log(indice);
}

//for of - Pega o conteudo do array
for (let fruta of frutas) {
	console.log(fruta);
}
