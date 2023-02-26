//tipo any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('Olá Mundo!'));
console.log(showMessage([1, 2, 3]));
console.log(
  showMessage({
    nome: 'Eita, JavaScriptou',
    errado: 'Com Certeza',
    qualquerCoisa: 'Qualquer coisa pode ir no Any',
  }),
);

//tipo void
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('1', '2', '3', '4');

const pessoa = {
  nome: 'Davi',
  sobrenome: 'Miguel',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
