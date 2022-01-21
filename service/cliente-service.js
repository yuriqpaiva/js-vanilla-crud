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
    if (res.ok) {
      return res.json();
    }
    throw new Error('Não foi possível listar os clientes');
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
  }).then((res) => {
    if (res.ok) {
      return res.body;
    } else {
      throw new Error('Não foi possível criar um cliente');
    }
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Não foi possível remover um cliente');
    }
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Não foi possível detalhar o cliente');
    }
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
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Não foi possível atualizar um cliente');
    }
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
