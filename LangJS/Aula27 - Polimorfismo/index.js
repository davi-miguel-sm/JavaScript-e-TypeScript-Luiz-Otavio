class Conta {
	constructor(agencia, conta, saldo) {
		this._agencia = agencia;
		this._conta = conta;
		this._saldo = saldo;
	}

	get saldo() {
		return this._saldo;
	}

	sacar(valor) {
		if (valor < 0) {
			console.log('Valor inválido');
			return;
		}
		if (this._saldo >= valor) {
			this._saldo -= valor;
		} else {
			console.log(`Você não tem saldo suficiente. Seu saldo é de ${this._saldo}`);
		}
	}

	depositar(valor) {
		if (valor > 0) {
			this._saldo += valor;
			console.log(`Seu saldo é de ${this._saldo}`);
		} else {
			console.log('Valor Inválido.');
		}
	}
}

class ContaCorrente extends Conta {
	constructor(agencia, conta, saldo) {
		super();
		this._agencia = agencia;
		this._conta = conta;
		this._saldo = saldo;
	}

	sacar(valor) {
		if (valor < 0) {
			console.log('Valor inválido');
			return;
		}
		if (this._saldo + 100 >= valor) {
			this._saldo -= valor;
		} else {
			console.log(`Você não tem saldo suficiente. Seu saldo é de ${this._saldo}`);
		}
	}
}

cc1 = new ContaCorrente(1, 22, 100);
cc1.sacar(200);
console.log(cc1.saldo);
c1 = new Conta(1, 22, 100);
c1.sacar(200);
