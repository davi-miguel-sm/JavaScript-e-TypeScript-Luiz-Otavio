function soma() {
	// Pode-se pegar todos os argumentos passados usando |arguments|
	// Apenas em declarações de função comuns
	let total = 0;
	for (let argumento of arguments) {
		total += argumento;
	}
	console.log(total);
}

soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function conta(operador, acumulador, ...numeros) {
	for (let numero of numeros) {
		switch (operador) {
			case '+':
				acumulador += numero;
				break;
			case '-':
				acumulador -= numero;
				break;
			case '*':
				if (acumulador === 0) acumulador = 1;
				acumulador *= numero;
				break;
			case '/':
				acumulador /= numero;
				break;
		}
	}
	console.log(acumulador);
}

conta('/', 1000, 1, 2, 10);
