var express = require('express');
var router = express.Router();
var ctrlEmp = require('../controllers/projectCtrl');

/* GET project listing. */
router.get('/', ctrlEmp.getAllProjects ); 
router.get('/:name', ctrlEmp.getProject );
router.put('/:name', ctrlEmp.editProject ); 
router.post('/', ctrlEmp.insertProject);
router.put('/',ctrlEmp.assignProject);
module.exports = router;