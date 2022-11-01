const link_url = require('./llavesnosql')
const mongoose = require('mongoose')
mongoose.connect(link_url).then(()=>console.log("Conectado Mongo")).catch(e=>console.log(e))
const schema = new mongoose.Schema({
        id: Number,
        img: String,
        name: String,
        quantity: String,
        price: Number,
        description: Number,
        discount: Boolean,
        discVal: Number ,
        discQuant:String
})
module.exports = mongoose.model('productos', schema);