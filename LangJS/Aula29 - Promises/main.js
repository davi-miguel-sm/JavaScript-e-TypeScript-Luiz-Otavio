function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

/* Modo de Resolução com Callbacks.
esperaAi('1', rand(1, 4), function () {
	esperaAi('2', rand(1, 4), function () {
		esperaAi('3', rand(1, 4));
	});
});
 */

// Modo de Resolução com Promises
esperaAi('1', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi('2', rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  });
