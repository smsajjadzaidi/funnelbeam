var express = require('express');
var router = express.Router();
var ctrlProject = require('../controllers/projectCtrl');

/* GET project listing. */
router.get('/', ctrlProject.GetAllProjects ); 
router.get('/:name', ctrlProject.GetProject );
router.put('/:name', ctrlProject.EditProject ); 
router.post('/', ctrlProject.InsertProject);
router.put('/',ctrlProject.AssignProject);
router.delete('/',ctrlProject.DeassignProject);

module.exports = router;