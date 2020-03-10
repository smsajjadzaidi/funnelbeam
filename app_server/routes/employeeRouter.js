var express = require('express');
var router = express.Router();
var ctrlEmp = require('../controllers/employeeCtrl');

/* GET employee listing. */
router.get('/', ctrlEmp.getAllEmployees ); 
router.get('/:email', ctrlEmp.getEmployee );
router.put('/:email', ctrlEmp.editEmployee ); 
router.post('/', ctrlEmp.insertEmployee);

module.exports = router;
