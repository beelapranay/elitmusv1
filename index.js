const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

dotenv.config()
const app = express()
const url = process.env.URL;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json())

app.get('/', (req, res) => {
    res.send('From the server');
});

//User Router
const userRouter = require('./routes/users')

app.use('/user', userRouter)

app.listen(3000, () => console.log('Server Started'))