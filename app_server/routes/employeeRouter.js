var express = require('express');
var router = express.Router();
var ctrlEmp = require('../controllers/employeeCtrl');

/* GET employee listing. */
router.get('/', ctrlEmp.GetAllEmployees ); 
router.get('/:email', ctrlEmp.GetEmployee );
router.put('/:email', ctrlEmp.EditEmployee ); 
router.post('/', ctrlEmp.InsertEmployee);

module.exports = router;
