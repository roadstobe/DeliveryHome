// const {Schema, model} = require('mongoose');

// const userSchema = new Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     phone:{
//         type: String,
//         required: true
//     },
//     password:{
//         type: String,
//         required: true
//     },
//     order:{
//       items:[{
//           type: Schema.Types.ObjectId,
//           ref: 'Order',
//           require:true
//       }]
//     },
//     discount:{
//       type:Number,
//       default: 0
//     },
//     address:{
//         type: String
//     },
//     birthday:{
//         type: Date
//     }

// })


// module.exports = model('User', userSchema)





















export class User{
  
    name:string;
    email:string;
    phone:string;
    password:string;
    discount:string;
    address:string;
    birthday:Date;
    constructor(name:string, email:string  ,  phone:string , password:string,discount:string,address:string,birthday:Date){
        
        this.name = name;
        this.email = email;
        this.phone= phone;
        this.password =password;
        this.discount = discount;
        this.address = address;
        this.birthday = birthday;

    }
}