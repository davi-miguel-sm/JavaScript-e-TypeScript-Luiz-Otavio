function validaCpf(cpf) {
	const multiplicadores = [10, 9, 8, 7, 6, 5, 4, 3, 2];

	let cpfSoNumeros = removeCharEspeciais(cpf);
	let primeiraParte = cpfSoNumeros.substring(0, 9);
	let segundaParte = cpfSoNumeros.substring(9);

	let primeiroDigit = 11 - (somatorioMultiArrays(primeiraParte, multiplicadores) % 11);
	primeiroDigit = primeiroDigit > 9 ? 0 : primeiroDigit;

	primeiraParte += primeiroDigit;
	multiplicadores.unshift(primeiroDigit);

	let segundoDigit = 11 - (somatorioMultiArrays(primeiraParte, multiplicadores) % 11);
	segundoDigit = segundoDigit > 9 ? 0 : segundoDigit;

	const ehValido = `${primeiroDigit}${segundoDigit}` === segundaParte ? true : false;

	return ehValido;
}

function removeCharEspeciais(cpf) {
	return cpf.replace(/[.-]/g, '');
}

function somatorioMultiArrays(array1, array2) {
	let total = 0;
	let count = 0;
	for (count = 0; count < array1.length; count++) {
		total = total + array1[count] * array2[count];
	}
	return total;
}

function somatorioMultiplicaoArrays(array1, array2) {
	let total = 0;
	let count = 0;
	for (count = 0; count < array1.length; count++) {
		total = total + array1[count] * array2[count];
	}
	return total;
}

let teste = new Array(
	'032.999.815-36',
	'090.824.465-70',
	'660.673.595-53',
	'831.364.200-98',
	'047.952.400-94',
	'198.200.520-33',
	'742.387.670-47',
	'526.220.920-32',
	'407.410.660-41',
);

teste.forEach((elem) => console.log(validaCpf(elem)));
