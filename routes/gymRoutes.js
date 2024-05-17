const express = require('express');
const multer = require('multer');
const gymController = require('../controllers/gymController');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('photo'), gymController.create);
router.get('/', gymController.findAll);
router.get('/:id', gymController.findById);
router.put('/:id', upload.single('photo'), gymController.update);
router.delete('/:id', gymController.delete);

module.exports = router;
