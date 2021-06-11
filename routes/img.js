var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var fs = require('fs');
var path = require('path');
require('dotenv/config');
const router = require("express").Router();

// Step 5 - set up multer for storing uploaded files
var multer = require('multer');
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});
var upload = multer({ storage: storage });

// Step 6 - load the mongoose model for Image
var imgModel = require('../models/Employee');

// Step 7 - the GET request handler that provides the HTML UI
router.get('/', (req, res) => {
	imgModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		}
		else {
			res.render('partEmp', { items: items });
		}
	});
});

// Step 8 - the POST handler for processing the uploaded file
router.post('/', upload.single('image'), (req, res, next) => {
	var obj = {
		fname: req.body.fname,
		lname: req.body.lname,
		cno: req.body.cno, email: req.body.email , sex: req.body.sex , dob: req.body.dob,
		des: req.body.des ,address: req.body.address, job:req.body.job , 
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			// item.save();
			res.redirect('/');
		}
	});
});

module.exports = router;