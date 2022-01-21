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

export const clienteService = { listaClientes };
