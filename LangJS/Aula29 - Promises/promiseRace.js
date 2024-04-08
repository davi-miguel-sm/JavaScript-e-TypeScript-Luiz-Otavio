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
  esperaAi('1', rand(0, 0.5)),
  esperaAi('2', rand(0, 0.5)),
  esperaAi('3', rand(0, 0.5)),
];

//Retorna a primeira promise a ser resolvida
Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro));

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
