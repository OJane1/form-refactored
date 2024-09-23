const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRouter = require('./FormRouter');
const path = require('path');

mongoose.set("strictQuery", false)

mongoose.connect('mongodb+srv://ospetrashova:22KdrpssuO9l4hTw@cluster0.9pdyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('WE WERE CONNECTED TO MONGODB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', formRouter);

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})
