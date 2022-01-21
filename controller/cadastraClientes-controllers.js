import { clienteService } from '../service/cliente-service.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = e.target.querySelector('[data-nome]').value;
  const email = e.target.querySelector('[data-email]').value;

  try {
    await clienteService.criaCliente(nome, email);
    window.location.href = '../telas/cadastro_concluido.html';
  } catch (e) {
    console.log(e);
    window.location.href = '../telas/erro.html';
  }
});
