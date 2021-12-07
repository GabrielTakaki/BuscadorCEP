const findCep = require('./findCep');
const findAddress = require('./findAddress');

const fetch = (url) => Promise.resolve({
  // status: 200,
  // ok: true,
  json: () => {
    if (url === 'https://viacep.com.br/ws/SC/Balneario%20Camboriu/Joao+Jorge+pio/json/')
      return Promise.resolve(findCep);
    if (url === 'https://viacep.com.br/ws/88334150/json/')
      return Promise.resolve(findAddress);
  },
});

module.exports = fetch;
