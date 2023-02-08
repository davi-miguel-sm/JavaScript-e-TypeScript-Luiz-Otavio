// const data = new Date(); //Dia de Hoje
// const data = new Date(2023, 1, 08, 07, 50, 55); //Definindo a data específica
// const data = new Date(1675858000000); //Milissegundos a partir da data base
// console.log(data.toString());

function zeroEsq(num) {
	return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
	const dia = zeroEsq(data.getDate());
	const mes = zeroEsq(data.getMonth() + 1);
	const ano = zeroEsq(data.getFullYear());

	return `${dia}/${mes}/${ano}`;
}

const data = new Date();
console.log(formataData(data));
