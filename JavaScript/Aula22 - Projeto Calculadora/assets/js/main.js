function criaCalculadora() {
	return {
		display: document.querySelector('.display'),

		inicia() {
			this.pegaClique();
		},
		realizaConta() {
			conta = this.display.value;
			try {
				conta = eval(conta);
				if (!conta || conta === Infinity) {
					alert('Conta Invalida!');
					return;
				}
				this.display.value = conta;
			} catch (e) {
				alert('Conta Invalida!');
				return;
			}
		},
		limpaDisplay() {
			this.display.value = '';
		},
		apagaUltimo() {
			// const valores = this.display.value.split('');
			// valores.pop();
			// this.display.value = valores.join('');
			this.display.value = this.display.value.slice(0, -1);
		},
		pegaClique() {
			document.addEventListener('click', (e) => {
				const element = e.target;
				if (element.classList.contains('btn-num')) {
					this.btnParaDisplay(element.innerText);
				}
				if (element.classList.contains('btn-clear')) {
					this.limpaDisplay();
				}
				if (element.classList.contains('btn-bckspc')) {
					this.apagaUltimo();
				}
				if (element.classList.contains('btn-total')) {
					this.realizaConta();
				}
			});
		},
		btnParaDisplay(valor) {
			this.display.value += valor;
		},
	};
}

const calculadora = criaCalculadora();
calculadora.inicia();
