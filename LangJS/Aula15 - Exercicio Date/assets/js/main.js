const h1Semana = document.querySelector('#diaSemana');
const h1Hora = document.querySelector('#hora');
const h1Data = document.querySelector('#data');

setInterval(() => {
	const objDate = new Date();
	const dia = DiaDaSemana(objDate.getDay());
	const horario = objDate.toLocaleTimeString();
	const data = objDate.toLocaleDateString();
	h1Semana.innerHTML = dia;
	h1Hora.innerHTML = horario;
	h1Data.innerHTML = data;
}, 500);

function DiaDaSemana(dia) {
	switch (dia) {
		case 0:
			return 'Domingo';
		case 1:
			return 'Segunda-Feira';
		case 2:
			return 'Terça-Feira';
		case 3:
			return 'Quarta-Feira';
		case 4:
			return 'Quinta-Feira';
		case 5:
			return 'Sexta-Feira';
		case 6:
			return 'Sábado';
	}
}
