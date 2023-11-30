var express = require('express');
const university_controlers= require('../controllers/university');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
    /* GET university */
router.get('/', university_controlers.university_view_all_Page );
    /* GET detail university page */
router.get('/detail', university_controlers.university_view_one_Page);
/* GET create university page */
router.get('/create', secured, university_controlers.university_create_Page);
    module.exports = router;
    /* GET create update page */
router.get('/update', secured, university_controlers.university_update_Page);
/* GET delete university page */
router.get('/delete', secured, university_controlers.university_delete_Page);

