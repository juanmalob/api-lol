const global_items = [

  { id: 1, text: 'hola', length: 4 },{ id: 2, text: 'hello', length: 4 },{ id: 3, text: 'chao', length: 4 }
]

module.exports = {


  friendlyName: 'Store',


  description: 'Store item.',


  inputs: {
    text: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {},
    error: {
      requestType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

      //obtener los datos de peticion
      let item = {
        id: parseInt(Math.random() * 1000),
        text: inputs.text,
        length: inputs.length
    }
    //Insertar
    global_items.push(item)

    return exits.success(item)

  }


};
