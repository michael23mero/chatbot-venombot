const mongoose = require('mongoose')

const { MONGO_URI } = require('./config')

const controllerPregunta = require('./controllers/pregunta.controller')
const chatbotContoller = require('./controllers/chatbot.controller')

async function dbc() {
    try{
        await mongoose.connect(MONGO_URI)
        console.log('Conexion exitosa con la base de datos')
    }
    catch(err){
        console.log(err)
        throw new Error('Error de conexion con la base de datos')
    }
}

async function main(){
    await dbc();
    await controllerPregunta.createBancoDePreguntas();
    await chatbotContoller.startChatBot()
} main()