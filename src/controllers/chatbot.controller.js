const venom = require('venom-bot')

const { ModeloPregunta } = require('../models')

exports.startChatBot = () =>{
    venom
        .create()
        .then((client) => start(client))
        .catch((erro) =>{
            console.log(erro)
        })

    function start(client){
        let messageStatic;

        client.onMessage((message) =>{
            ModeloPregunta.find({
                '$or' : [
                    {
                        'pregunta': {
                            '$regex' : message.body, '$options' : 'i'
                        }
                    }
                ]
            }).exec((err, pregunta) =>{
                if(pregunta.length != 0){
                    messageStatic = pregunta[0].respuesta
                }
                else{
                    messageStatic = 'No puedo responder eso :('
                }

                client
                    .sendText(message.from, messageStatic)
                    .then((result) =>{
                        console.log({
                            'cliente' : message.body,
                            'bot' : pregunta[0].respuesta
                        })
                    })
                    .catch((erro) =>{
                        console.log('Error', erro)
                    })
            })
        })
    }
}