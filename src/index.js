const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-vxkoh.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
})

app.get('/', (req, res) => {
  res.send('Hi there!');
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
