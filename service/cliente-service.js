const listaClientes = () => {
  // Utilizando Promise com xmlHttpRequest:
  //   const promise = new Promise((resolve, reject) => {
  //     const http = new XMLHttpRequest();
  //     http.open('GET', 'http://localhost:3000/profile');
  //     http.send();
  //     http.onload = () => {
  //       if (http.status >= 400) {
  //         reject(JSON.parse(http.response));
  //       } else {
  //         resolve(JSON.parse(http.response));
  //       }
  //     };
  //   });
  //   return promise;

  return fetch('http://localhost:3000/profile').then((res) => {
    return res.json();
  });
};

const criaCliente = (nome, email) => {
  return fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((res) => res.body);
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((res) => {
    return res.json();
  });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      email,
    }),
  }).then((res) => {
    return res.json();
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
