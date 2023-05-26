const express = require("express");
const router = express();
const categoryCtrl = require("../controllers/category");

const auth = require("../middleware/auth.js")

router.post('/',auth, categoryCtrl.createCategory);
router.get('/', categoryCtrl.readAll);

// router.get('/:name', auth, categoryCtrl.findByName);
// router.post('/', categoryCtrl.createCategory);
// router.delete('/delete/:id', categoryCtrl.deleteCategory);
// router.put('/update/:id', multer, categoryCtrl.updateCategory);
module.exports = router;