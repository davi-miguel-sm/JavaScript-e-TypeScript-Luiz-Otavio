const soma = (x, y) => {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw `Erro na soma ${x} + ${y} | As variaveis precisam ser números`;
	}
	return x + y;
};

try {
	console.log(soma(2, 32));
	console.log(soma('a', 32));
} catch (err) {
	console.log(err);
} finally {
	console.log('Função Finalizada!');
}
