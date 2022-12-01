//Dependencias
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

//Se conecta ao banco de dados
const connect = async() => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
    } catch (error) {
        console.log("Não foi possivel se conectar ao banco de dados⚠");
        console.log(error.message);
    }
}

module.exports = {
    connect
}