const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const esquemaPregunta = new Schema(
    {
        pregunta: { type : String },
        respuesta: { type: String }
    },
    {
        timestamps: { createdAt: true, updatedAt: true }
    }
)

module.exports = mongoose.model("coleccionPregunta", esquemaPregunta)