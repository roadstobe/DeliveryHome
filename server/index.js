const express = require('express')
const path = require('path');
<<<<<<< HEAD

const homeRouter = require('./routes/homeRouter');
=======
const mongoose = require('mongoose');

const homeRouter = require('./routes/homeRouter');
const productApi = require('./routes/productApi');
const userApi = require('./routes/userApi');
const orderApi = require('./routes/orderApi');
>>>>>>> Igor-Klipkov

const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);

<<<<<<< HEAD
=======
app.use('/api', productApi);
app.use('/userApi', userApi);
app.use('/orderApi', orderApi);

>>>>>>> Igor-Klipkov

app.use(function (req, res) {
    res.status(404).send('page not found')
});


<<<<<<< HEAD
app.listen(PORT, ()=>{
    console.log(`server has been started on port ${PORT}`)
})
=======
start();

async function start(){
    try{
        await mongoose.connect(`mmongodb://localhost:27017/pizzaStore`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err){
            if(err) return console.log(err);

            app.listen(PORT, ()=>{
                console.log(`server has been started on port ${PORT}`)
            })
        });
    }catch (e) {
        console.log(e)
    }
}
>>>>>>> Igor-Klipkov
