const global_items = [

  { id: 1, text: 'hola', length: 4 },{ id: 2, text: 'hello', length: 4 },{ id: 3, text: 'chao', length: 4 }
]

module.exports = {


  friendlyName: 'Show',


  description: 'Show item.',


  inputs: {

    id: {
      type: 'number',
      required: true
    }

  },


  exits: {
    success: {},
    error: {
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

     //Obtener id /words/12
     let id = inputs.id
     //obtener elemento
     //retornar
     let item  = global_items.filter(item => parseInt(item.id) === parseInt(id))
     sails.log.debug(item)
     if (item.length>0) {
         return exits.success(item)
     }else{
         return exits.error()
     }

  }


};
