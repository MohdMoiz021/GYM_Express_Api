const express = require('express');
const multer = require('multer');
const gymController = require('../controllers/gymController');

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const prefix=Date.now()+'_'+Math.round(Math.random()*1E9);
        cb(null, prefix + '-' + file.originalname);
    }
});
//new Date().toISOString().replace(/:/g, '-')
const upload = multer({ storage: storage,
    fileFilter:function(req,file,cb){
        if(file.mimetype.startsWith('image'))
            cb(null,true)
        else
        cb('Invalid File type')
    }
 });

router.post('/', upload.single('photo'), gymController.create);
router.get('/', gymController.findAll);
router.get('/:id', gymController.findById);
router.put('/:id', upload.single('photo'), gymController.update);
router.delete('/:id', gymController.delete);

module.exports = router;
