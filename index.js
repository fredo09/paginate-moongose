const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });


app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

mongoose.connect(`${process.env.DBB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}, (err, _) => {
    if (err) {
        console.log(err);
    } else {
        server()
    }
});

const server = () => {
    app.listen(4000, () => {
        console.log(` 🚀  Servidor lanzado con exito`);
    })
}