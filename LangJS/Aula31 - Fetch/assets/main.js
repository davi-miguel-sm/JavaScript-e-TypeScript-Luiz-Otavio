const listAllTagA = document.querySelectorAll('a');

for (a of listAllTagA) {
  a.addEventListener('click', (event) => {
    event.preventDefault();
    carregaPagina(event.target);
  });
}

async function carregaPagina(element) {
  let href = element.getAttribute('href');
  try {
    const response = await fetch(href);
    const html = await response.text();
    carregaResultado(html);
  } catch (error) {
    carregaResultado(`Foi retornado o erro ${error}`);
  }
}

function carregaResultado(text) {
  document.querySelector('.resultado').innerHTML = text;
}
