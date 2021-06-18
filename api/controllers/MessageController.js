/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    list: async function(req, res){
        let room_id = req.params.room_id
        sails.log.debug(room_id)
        let message = {}

        //Obtener informacion de DB
        let room = await Room.findOne({ 
            id: room_id
        })
        .populate('messages')

        message = room.messages

        return res.json(message)
    },
    store: async function (req, res) {
        //logica
        let room_id = req.params.room_id
        let data = {
            text: req.body.text,
            user_id: req.body.user_id,
            // FK
            owner: room_id
        }

        await Message.create(data)

        //Broadcast o decir que algo ha cambiado a todos los clientes
        sails.sockets.blast({ room: room_id }) //hace un broadcast


        return res.status(201).json({ message: 'Elemento creado' })
    }
};

