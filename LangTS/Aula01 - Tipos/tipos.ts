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
