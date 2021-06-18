/**
 * ViewController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    home: function (req, res) {

        res.view('pages/home')
    },
    login: function (req, res) {

        res.view('pages/login', { layout: 'layouts/sinlayout'  } )
        
    },

    signup: function (req, res) {

        res.view('pages/signup' ,{ layout: 'layouts/sinlayout'  })
    },

    inicio: function (req, res) {

        sails.log.debug(req)

        res.view('pages/inicio')
    },

};
 
