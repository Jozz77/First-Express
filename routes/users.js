const express = require('express');
const router = express.Router();
const { createPerson, getAllPersons, getPersonById, updatePerson, deletePerson } = require('../controller/userController.js');

/* GET users listing. */
router.post('/users', createPerson)
router.get('/users', getAllPersons);
router.get('/user/:id', getPersonById);
router.put('/user/update/:id', updatePerson);
router.delete('/user/delete/:id', deletePerson);

module.exports = router;