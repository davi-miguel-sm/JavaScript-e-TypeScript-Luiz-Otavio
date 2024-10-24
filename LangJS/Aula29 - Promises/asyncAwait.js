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

async function executa() {
  try {
    const fase1 = await esperaAi('Fase1', rand(5, 15));
    console.log(fase1);

    const fase2 = await esperaAi('Fase2', rand(5, 15));
    console.log(fase2);

    const fase3 = await esperaAi('Fase3', rand(5, 15));
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();
