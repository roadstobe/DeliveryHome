const express = require('express')
const path = require('path');

const homeRouter = require('./routes/homeRouter');

const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);


app.use(function (req, res) {
    res.status(404).send('page not found')
});


app.listen(PORT, ()=>{
    console.log(`server has been started on port ${PORT}`)
})
