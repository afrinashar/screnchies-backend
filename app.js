// app.js
const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/scrunchies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
