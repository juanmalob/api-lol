/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
let bcrypt = require('bcrypt')

module.exports = {

  attributes: {

    nick: {
      type: 'string',
      required: true,
      allowNull:false,
      unique:true
    },
    email: {
      type: 'string',
      required: true,
      allowNull:false,
      unique:true
    },
    password: {
      type: 'string',
      required: true,
      allowNull:false,
    },
    tipoUsuario: {
      type: 'string',
      allowNull:false,
      defaultsTo: 'Empleado',
      isIn: ['Administrador','Cliente','Empleado','Proveedor','Comercial']
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password']) //esto hace que se omita el envio del password
  },
  //beforeCreate: function (user, next) {
    //encriptar el valor al recibirlo y grabarlo
    //instalamos bcrypt
    //npm i -S bcrypt
   //instalar  npm i -S jsonwebtoken 

    /*bcrypt.hash(user.password, 10)
    sails.helpers.passwords.hashPassword( user.password).exec((err,hashedPassword) =>{
      if (err) {
        console.log(err)
        return proceed(err)
      }

      user.password = hashedPassword
      return proceed()
    })*/


   /* bcrypt.genSalt(10, function(err,salt) {

      bcrypt.hash(user.password, salt, function(err,hash) {
        if (err) {
          console.log(err)
          return proceed(err)
        }

        user.password = hash
        return proceed()
                
      })

    })*/

    //npm install sails-hook-organics --save
    /*sails.helpers.passwords.hashPassword(user.password).exec((err, hashedPassword)=>{
      if (err) { return next(err); }
      user.password = hashedPassword;
      sails.log.debug(user.password)
      next
     });//_∏*/
    
     /* sails.log.debug(user)
      bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
          console.log(err)
          next(err)
        }
        sails.log.debug(user.password)
        user.password = hash
        
      })
      sails.log.debug(user.password)*/
      //return next(new Error("Brand does not exist."));
  //},

};

