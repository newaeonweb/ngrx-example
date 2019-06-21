const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./src/assets/data/database.json');
const userdb = JSON.parse(
  fs.readFileSync('./src/assets/data/users.json', 'UTF-8')
);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';

const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      user => user.email === email && user.password === password
    ) !== -1
  );
}

//  Auth using JWT
// server.post('/auth/login', (req, res) => {
//   const { email, password } = req.body;
//   if (isAuthenticated({ email, password }) === false) {
//     const status = 401;
//     const message = 'Incorrect email or password';
//     res.status(status).json({ status, message });
//     return;
//   }
//   const access_token = createToken({ email, password });
//   res.status(200).json({ access_token });
// });

// // Auth interceptor to check Token
// server.use(/^(?!\/auth).*$/, (req, res, next) => {
//   if (
//     req.headers.authorization === undefined ||
//     req.headers.authorization.split(' ')[0] !== 'Bearer'
//   ) {
//     const status = 401;
//     const message = 'Error in authorization format';
//     res.status(status).json({ status, message });
//     return;
//   }
//   try {
//     verifyToken(req.headers.authorization.split(' ')[1]);
//     next();
//   } catch (err) {
//     const status = 401;
//     const message = 'Error access_token is revoked';
//     res.status(status).json({ status, message });
//   }
// });

// Auth without token
server.post('/api/signin', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }

  // Get user from DB
  let user = userdb.users.find(user => user.email === email);

  res.status(200).json({ email: email, password: password, name: user.name });
});

server.use(router);

server.listen(3000, () => {
  console.log('Run Auth API Server');
});

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors());

// app.get('/ping', (req, res, next) => {
//   res.status(200).json('pong!');
// });

// app.post('/register', (req, res, next) => {
//   if (req.body.email === 'test@test.com') {
//     res.status(201).json({
//       status: 'success',
//       token: '1234567',
//     });
//   } else {
//     res.status(400).json({
//       status: 'error',
//     });
//   }
// });

// app.post('/login', (req, res, next) => {
//   if (req.body.email === 'test@test.com') {
//     res.status(200).json({
//       status: 'success',
//       token: '1234567',
//     });
//   } else {
//     res.status(400).json({
//       status: 'error',
//     });
//   }
// });

// app.get('/status', (req, res, next) => {
//   if (!(req.headers && req.headers.authorization)) {
//     return res.status(400).json({
//       status: 'error',
//     });
//   }
//   // simulate token decoding
//   const header = req.headers.authorization.split(' ');
//   const token = header[1];
//   if (token === '1234567') {
//     res.status(200).json({
//       status: 'success',
//     });
//   } else {
//     res.status(401).json({
//       status: 'error',
//     });
//   }
// });

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     status: 'error',
//     error: err,
//   });
// });

// app.listen(1337, () => {
//   console.log('App listening on port 1337!');
// });
