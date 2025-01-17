var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const router = express.Router();

// Middleware setup before defining routes
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use(upload.array()); // for parsing multipart/form-data
router.use(express.static('public')); 

// GET request to render the form
router.get('/', function (req, res) {
  res.render('form'); // Renders 'form.jade' from the 'views' directory
});

// POST request to handle form submissions
router.post('/', function (req, res) {
  console.log(req.body); // Logs the form data to the console
//   res.send('Received your request!');
//   res.send(req.body);
res.send(`
   <h1>Received your request!</h1>
   <p>Here is the submitted data:</p>
   <pre>${JSON.stringify(req.body, null, 2)}</pre>
 `);
});

module.exports = router;
