const global_items = [

  { id: 1, text: 'hola', length: 4 },{ id: 2, text: 'hello', length: 4 },{ id: 3, text: 'chao', length: 4 }
]


module.exports = {


  friendlyName: 'List',


  description: 'List item.',


  inputs: { 
  },


  exits: {
//salidas
success:{}
  },
  /*  Entradas
  *    @param {Object} inputs Entradas de aplicacion
  */


  fn: async function (inputs, exits) {

    // All done.
    //obtener todos los elementos
    let items = global_items
    
    return exits.success(items)


  }


};
