const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let numero of numeros) {
	if (numero % 2 === 0) {
		continue;
	}
	console.log(numero);
}

console.log('##########');

for (let numero of numeros) {
	if (numero ** 2 === 100) {
		break;
	}
	console.log(numero ** 2);
}
