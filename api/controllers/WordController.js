/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const global_words = [

    { id: 1, text: 'hola', length: 4 },{ id: 2, text: 'hello', length: 4 },{ id: 3, text: 'chao', length: 4 }
]
module.exports = {
  
    list: function(req, res){
        //Obtener elementos
        let words = global_words 
        //Retornar los elementos
        return res.status(200).json(words) //devolvemos estatus y data

    },

    show: function(req, res){
        //Obtener id /words/12
        let id = req.params.id
        //obtener elemento
        //retornar
        let word  = global_words.filter(word => parseInt(word.id) === parseInt(id))
        sails.log.debug(word)
        if (word.length>0) {
            return res.json(word)
        }else{
            return res.status(404).json({ error: 'Element not found '})
        }

    },

    store: function(req, res) {

        //obtener los datos de peticion
        let word = {
            id: parseInt(Math.random() * 1000),
            text: req.body.text,
            length: req.body.text.length
        }
        //Insertar
        global_words.push(word)

        return res.status(201).json(word)
    }
};

