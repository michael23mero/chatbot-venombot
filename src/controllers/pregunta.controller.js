const bancodePregunta = require('../data/banco-de-preguntas')
const { ModeloPregunta } = require('../models')

exports.createBancoDePreguntas = async function (req, res) {
    let pregunta;
    await ModeloPregunta.deleteMany();
    await ModeloPregunta.find().exec((err, datos) => {
        if(err){
            return res.status(400).send({
                status: 'error',
                message: 'Error 400'
            })
        }
        if(datos.length == 0){
            bancodePregunta.forEach(element => {
                pregunta = new ModeloPregunta(element)
                pregunta.save()
            })
            console.log('Los datos fueron insertados en la db con exito')
        }
    })
}