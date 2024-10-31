const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

const listAllTagA = document.querySelectorAll('a');

for (a of listAllTagA) {
  a.addEventListener('click', (event) => {
    event.preventDefault();
    carregaPagina(event.target);
  });
}

async function carregaPagina(element) {
  let href = element.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href,
  };
  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (error) {
    carregaResultado(`Foi retornado o erro ${error}`);
  }
}

function carregaResultado(text) {
  document.querySelector('.resultado').innerHTML = text;
}
