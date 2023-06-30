const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const db = require('./db.json');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.users.find(user => user.email === email && user.password === password);

  if (user) {
    res.redirect('https://www.dio.me/');
  } else {
    res.status(401).json({ error: 'Dados não autenticados, reveja e tente novamente.' });
  }
});

server.listen(8001, () => {
  console.log('JSON Server is running');
});
