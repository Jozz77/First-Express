const express = require('express');
const { loginUser, getAllUsers, registerUser } = require('../controller/auth');
const router = express.Router();

/* GET users listing. */
router.post('/login', loginUser)

router.post("/create", registerUser);
// GET request to render the form
router.get('/create', function (req, res) {
    res.render('create'); // Renders 'form.jade' from the 'views' directory
  });
  
  router.get("/guys", getAllUsers);

module.exports = router;