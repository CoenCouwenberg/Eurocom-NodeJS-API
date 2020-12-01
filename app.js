const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
// const bodyParser = require('body-parser'); <- nieuwe methode regel 7 & 8

// Middlewares
// app.use(auth);
app.use(cors());

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// FETCH
// fetch('/api/posts').then(result => {
// 	return result.json();
// }).then(data => {
// 	console.log(data);
// });

const postsRoute = require('./routes/posts');
const stappenRoute = require('./routes/stappenteller');
const wandelRoute = require('./routes/wandelsnelheid');
const zittenRoute = require('./routes/zitten');

app.use('/posts', postsRoute);
app.use('/stappenteller', stappenRoute);
app.use('/wandelsnelheid', wandelRoute);
app.use('/zitten', zittenRoute);
// app.use('/user', userRoute);

// Routses
app.get('/', (req, res) => {
	res.send('We are on home');
});

app.get('/posts', (req, res) => {
	res.send('We are on posts');
});

// Connect to the databasee
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));


// Poort
app.listen();