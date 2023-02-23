function recursiva(valor) {
	if (valor >= 11292) return;
	valor++;
	console.log(valor);
	recursiva(valor);
}

function fatorial(valor) {
	if (valor === 1) return 1;
	return valor * fatorial(valor - 1);
}

console.log(fatorial(5));
