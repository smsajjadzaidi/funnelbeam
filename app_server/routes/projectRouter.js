var express = require('express');
var router = express.Router();
var ctrlProject = require('../controllers/projectCtrl');

/* GET project listing. */
router.get('/', ctrlProject.getAllProjects ); 
router.get('/:name', ctrlProject.getProject );
router.put('/:name', ctrlProject.editProject ); 
router.post('/', ctrlProject.insertProject);
router.put('/',ctrlProject.assignProject);
router.delete('/',ctrlProject.deassignProject);
module.exports = router;