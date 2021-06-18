/**
 * ChampController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Champ = require("../models/Champ");

module.exports = {
  
    get: function(req, res){
        Champ.find()
           .then(function(champs){//retorna una promesa
                if(!champs || champs.length===0){
                    return res.send({
                        'success': false,
                        'message': 'No records found'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Records fetched',
                    'data': champs
                })
           })
           .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to fetch records',
                })

           })
    },

    create: function(req, res){
        sails.log.debug(req.allParams())
        Champ.create(req.allParams())
           .then(function(champ){
               return res.send({
                'success': true,
                'message': 'record created',
               })
           })
           .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message':'Unable to create record'
                })

           })
    },

    update: function(req, res){

        sails.log.debug(req.param('id'))
        Champ.update(req.param('id'), req.allParams())
        .then(function(champ){
            return res.send({
                'success': true,
                'message': 'record Updated',
                'data': champ
            })
        })
        .catch(function(err){
            return res.send({
                'success': false,
                'message': 'Unable to update'
            })
        }
        )
    },

    delete: function(req, res){
        sails.log.debug(req.param('id'))
        Champ.destroy(req.param('id'))
        .then(function(champ){
            return res.send({
                'success': true,
                'message': 'record delete',
                'data': champ
            })
        })
        .catch(function(err){
            return res.send({
                'success': false,
                'message': 'Unable to delete'
            })
        }
        )


    }
    
};

