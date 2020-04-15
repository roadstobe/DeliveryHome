const express = require('express')
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD

const homeRouter = require('./routes/homeRouter');
=======
const mongoose = require('mongoose');

const homeRouter = require('./routes/homeRouter');
const productApi = require('./routes/productApi');
const userApi = require('./routes/userApi');
const orderApi = require('./routes/orderApi');
>>>>>>> Igor-Klipkov
=======
const mongoose = require('mongoose');

const homeRouter = require('./routes/homeRouter');
const productApi = require('./routes/productApi');
const userApi = require('./routes/userApi');
const orderApi = require('./routes/orderApi');
>>>>>>> 0d58566570ba9815940606a73e11272cec5721c7

const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 0d58566570ba9815940606a73e11272cec5721c7
app.use('/api', productApi);
app.use('/userApi', userApi);
app.use('/orderApi', orderApi);

<<<<<<< HEAD
>>>>>>> Igor-Klipkov
=======
>>>>>>> 0d58566570ba9815940606a73e11272cec5721c7

app.use(function (req, res) {
    res.status(404).send('page not found')
});


<<<<<<< HEAD
<<<<<<< HEAD
app.listen(PORT, ()=>{
    console.log(`server has been started on port ${PORT}`)
})
=======
=======
>>>>>>> 0d58566570ba9815940606a73e11272cec5721c7
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
<<<<<<< HEAD
>>>>>>> Igor-Klipkov
=======
>>>>>>> 0d58566570ba9815940606a73e11272cec5721c7
