/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'pages/homepage' },
  //View 
  //Una opcion para llamar a vistas.
  /*'GET /': {
    view: 'pages/index'
  },*/

  //Opcion para llamar a vistas por controller
  'GET /': 'ViewController.login',
  'GET /home': 'ViewController.home',
  'GET /inicio': 'ViewController.inicio',
  'GET /signup': 'ViewController.signup',

  //API AUTH
  'POST /auth/login': 'AuthController.login',
  'GET  /auth/check': 'AuthController.check',
  'POST /auth/signup': 'AuthController.signup',
  'POST /auth/logout': 'AuthController.logout',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  //utilizando controladoras
  'GET /api/champs': 'ChampsController.get',
  'POST /api/champs': 'ChampsController.create',
  'PUT /api/champs/:id' : 'ChampsController.update',
  'DELETE /api/champs/:id' : 'ChampsController.delete',

  'GET /controller/:id': {
    controller: 'Test',
    action: 'test'
  },

  //utilizamos funciones
  'GET /ejemplo': {
    fn: function (req, res) {
      return res.json({ message: 'ok' })
    }
  },

  'POST /crear': function (req,res) {
    let title = req.body.title
    let body = req.body.body
    return res.json({ 
      title: title, body: body
    })
  },

  'GET /words': 'WordController.list',
  'GET /words/:id': 'WordController.show',
  'POST /words': 'WordController.store',

  'GET /items': 'item/list',
  'GET /items/:id': 'item/show',
  'POST /items': 'item/store',

  'GET /rooms': 'RoomController.list',
  'GET /rooms/:id': 'RoomController.show',
  'POST /rooms': 'RoomController.store',
  'PUT /rooms/:id': 'RoomController.update',
  'DELETE /rooms/:id': 'RoomController.destroy',


  'POST /rooms/:room_id/informations': 'InformationController.store',

  'POST /rooms/:room_id/messages': 'MessageController.store',
  'GET /rooms/:room_id/messages': 'MessageController.list',
 
  'GET /stickers': 'StickerController.list',
  'POST /stickers': 'StickerController.store',
  'POST /rooms/:room_id/stickers/:sticker_id': 'StickerController.attach',

};
