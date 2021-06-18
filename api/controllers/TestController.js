/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    test: function(req, res) {
        let id = req.params.id
        return res.json({ id: id })
    }

};

