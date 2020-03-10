var express = require('express');
var router = express.Router();
var ctrlEmp = require('../controllers/clientCtrl');

/* GET project listing. */
router.get('/', ctrlEmp.getAllClients ); 
router.get('/:name', ctrlEmp.getClient);
router.put('/:name', ctrlEmp.editClient ); 
router.post('/', ctrlEmp.insertClient);

module.exports = router;