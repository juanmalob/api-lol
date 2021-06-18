/**
 * RoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




const _perPage = 10 //utilizamos paginacion SAILS

module.exports = {
    //Hacemos llamada asincrona
    list: async function(req, res) {
        //let room = await room.find()

        // app.com/api/rooms?page=1&perPage=2
        let page = Math.abs((req.query.page - 1)) || 0
        let perPage = req.query.perPage || _perPage
        sails.log.debug(page)
        sails.log.debug(perPage)
        let rooms = await Room.find(
            { 
                limit: perPage , skip: page 
            }
            )
            .populate('information')
            .populate('messages')
            .populate('stickers')


        return res.json(rooms)
    },
    show: async function(req, res) {

        let id = req.params.id
        let room = await Room.findOne({
            where: { id: id }
        })

        return res.json(room)

    },
    store: async function(req, res) {

        let data = {

            name: req.body.name
        }

        let room = await Room.create(data).fetch()

        return res.status(201).json(room)


    },
    update: async function(req, res) {
        let id = req.params.id
        let data = {

            name: req.body.name
        }
        let room = await Room.updateOne({ id: id }).set(data)
        return res.json(room)
    },
    destroy: async function(req, res) {
        let id = req.params.id
        let room = await Room.destroyOne({ id: id })
        return res.json(room)
    },

};

