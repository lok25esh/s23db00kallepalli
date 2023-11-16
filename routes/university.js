var express = require('express');
    const university_controlers= require('../controllers/university');
    var router = express.Router();
    /* GET university */
    router.get('/', university_controlers.university_view_all_Page );
    /* GET detail university page */
router.get('/detail', university_controlers.university_view_one_Page);
/* GET create university page */
router.get('/create', university_controlers.university_create_Page);
    module.exports = router;
    /* GET create update page */
router.get('/update', university_controlers.university_update_Page);
/* GET delete university page */
router.get('/delete', university_controlers.university_delete_Page);

