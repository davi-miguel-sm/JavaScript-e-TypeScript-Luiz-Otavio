function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

function baixarPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve('Página em Cache');
  } else {
    return esperaAi('Baixei', 500);
  }
}

baixarPagina()
  .then((dados) => console.log(dados))
  .catch(console.log);
