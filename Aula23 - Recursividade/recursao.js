function recursiva(valor) {
	if (valor >= 11292) return;
	valor++;
	console.log(valor);
	recursiva(valor);
}

recursiva(1);
