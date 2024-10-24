function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error('Parametro com tipo inválido'));
      return;
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

const promises = [
  'Primeiro Valor',
  esperaAi(1, 600),
  esperaAi('2', 450),
  esperaAi('3', 200),
  'Último Valor aqui',
];

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro));
