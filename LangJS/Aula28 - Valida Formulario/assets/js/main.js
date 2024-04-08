class ValidaFormulario {
  constructor() {
    this.form = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.form.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const camposValidos = this.camposValidos();
    if (camposValidos) {
      this.form.submit();
      alert('Formulário Enviado!');
    }
  }

  camposValidos() {
    let valid = true;

    for (let errorMsg of this.form.querySelectorAll('.error-text')) {
      errorMsg.remove();
    }

    for (let campo of this.form.querySelectorAll('.validar')) {
      let label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `O campo ${label} não pode estar vazio.`);
        valid = false;
      }

      if (campo.value !== '' && campo.classList.contains('cpf')) {
        valid = this.analisaCpf(campo);
      }

      if (campo.value !== '' && campo.classList.contains('usuario')) {
        valid = this.analisaUsuario(campo);
      }

      if (campo.value !== '' && campo.classList.contains('senha')) {
        valid = this.analisaSenha(campo);
      }

      if (campo.value !== '' && campo.classList.contains('repetir-senha')) {
        valid = this.analisaRepetirSenha(campo);
      }
    }

    return valid;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('beforebegin', div);
  }

  analisaCpf(campo) {
    let valid = true;
    if (!validaCpf(campo.value)) {
      this.criaErro(campo, 'Esse CPF é inválido!');
      valid = false;
    }

    return valid;
  }

  analisaUsuario(campo) {
    let valid = true;
    const usuario = campo.value;
    if (!usuario.match(/^[A-Za-z-0-9]+$/g)) {
      this.criaErro(campo, 'O Usuário precisa ter apenas letras e números!');
      valid = false;
    }
    if (!(usuario.length >= 3 && usuario.length <= 12)) {
      this.criaErro(campo, 'O Usuário precisa ter entre 3 e 12 caracteres!');
      valid = false;
    }

    return valid;
  }

  analisaSenha(campo) {
    let valid = true;
    const senha = campo.value;
    if (!(senha.length >= 6 && senha.length <= 12)) {
      this.criaErro(campo, 'A senha precisa ter entre 6 e 12 caracteres!');
      valid = false;
    }
    return valid;
  }

  analisaRepetirSenha(campo) {
    let valid = true;
    const repetirSenha = campo.value;
    const senha = this.form.querySelector('.senha').value;
    if (!(repetirSenha === senha)) {
      this.criaErro(campo, 'As senhas são diferentes!');
      valid = false;
    }
    return valid;
  }
}

const valida = new ValidaFormulario();
