/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let bcrypt = require('bcrypt');
const jwToken = require('../services/jwToken');

module.exports = {
  
    login: async function (req, res) {
        let user = await User.findOne({ where: { email: req.body.email }})
        //sails.log.debug(user)
        if (user) {
            //gernerar token
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result) {
                    req.session.user_detail = user;
                    return res.status(200).json({
                        user: user,
                        token: jwToken.sign(user)
                    })
                }else{
                    return res.status(401).json({ error: 'Invalid password' })
                }
            })
        }
        else {
            return res.status(404).json({ message: 'User not found' })
        }
    },
    check: async function (req, res) {
        return res.json(req.user)
        
    },

    logout: async function (req, res) {
        req.session.user_detail = null
        return res.status(200).json({
            message: 'Logout correcto'
        })
    },

    signup: async function (req, res) {

        let user = {
            nick: req.body.nick,
            email: req.body.email,
            password: req.body.password
        }
        //sails.log.debug(req)
        //sails.log.debug(user)
        //await User.beforeCreate(user)
        //sails.log.debug('HASH hecho')
        //sails.log.debug(user)

        sails.helpers.passwords.hashPassword(user.password).exec((err, hashedPassword)=>{
            if (err) { return res.status(401).json({ error: 'Error en Hash' }); }
            user.password = hashedPassword;
            sails.log.debug(user.password)
           });
        

        let usuario = await User.create(user).fetch()
        
        return res.status(201).json({ message: 'User registered' })
    }
};

