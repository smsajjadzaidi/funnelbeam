var express = require('express');
var router = express.Router();
var ctrlRouter = require('../controllers/clientCtrl');

/* GET client listing. */
router.get('/', ctrlRouter.GetAllClients ); 
router.get('/:name', ctrlRouter.GetClient);
router.put('/:name', ctrlRouter.EditClient ); 
router.post('/', ctrlRouter.InsertClient);

module.exports = router;