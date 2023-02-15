const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', (e) => {
	if (!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
	limpaInput();
});

inputTarefa.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		if (!inputTarefa.value) return;
		criaTarefa(inputTarefa.value);
		limpaInput();
	}
});

function criaElemento(elem) {
	const elemento = document.createElement(elem);
	return elemento;
}

function criaTarefa(textoInput) {
	const li = criaElemento('li');
	li.innerText = textoInput;
	tarefas.appendChild(li);
	limparTarefa(li);
	salvarTarefas();
}

function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}

function limparTarefa(elem) {
	elem.innerText += ' ';
	const botaoApagar = criaElemento('button');
	botaoApagar.setAttribute('class', 'apagar');
	botaoApagar.innerText = 'Apagar';
	elem.appendChild(botaoApagar);
}

document.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('apagar')) {
		element.parentElement.remove();
		salvarTarefas();
	}
});

function salvarTarefas() {
	const liTarefas = tarefas.querySelectorAll('li');
	const listaDeTarefas = [];

	for (let tarefa of liTarefas) {
		let tarefaTexto = tarefa.innerText.replace('Apagar', '').trim();
		listaDeTarefas.push(tarefaTexto);
	}
	const tarefasJson = JSON.stringify(listaDeTarefas);
	localStorage.setItem('tarefas', tarefasJson);
}

function pegaTarefasSalvas() {
	const tarefas = localStorage.getItem('tarefas');
	const listaDeTarefas = JSON.parse(tarefas);

	for (let tarefa of listaDeTarefas) {
		criaTarefa(tarefa);
	}
}
pegaTarefasSalvas();
