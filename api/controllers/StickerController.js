/**
 * StickerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const _perPage = 10 //utilizamos paginacion SAILS

module.exports = {
  //list, store
   //Hacemos llamada asincrona
    list: async function(req, res) {
        //let room = await room.find()

        // app.com/api/rooms?page=1&perPage=2
        let page = Math.abs((req.query.page - 1)) || 0
        let perPage = req.query.perPage || _perPage
        sails.log.debug(page)
        sails.log.debug(perPage)
        let stickers = await Sticker.find(
            { 
                limit: perPage , skip: page 
            }
            )
            .populate('rooms')



        return res.json(stickers)
    },
    store: async function(req, res) {

        let data = {

            name: req.body.name,
            image: req.body.image

        }

        let sticker = await Sticker.create(data).fetch()

        return res.status(201).json(sticker)


    },

    attach: async function(req, res){
        let room_id = req.params.room_id
        let sticker_id = req.params.sticker_id
        //relacionamos las dos tablas
        await Room.addToCollection(room_id, 'stickers', sticker_id)
        return res.status(200).json({ message: 'Elemento vinculado '})
    },

};

