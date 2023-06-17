
const express = require('express');

const index = require('./routes/index-routes.js');
const notes = require('./routes/notes-routes.js');

const PORT = process.env.PORT||3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', index);
app.use('/', notes);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);