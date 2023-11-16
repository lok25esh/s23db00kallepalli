var express = require('express');
    const university_controlers= require('../controllers/university');
    var router = express.Router();
    /* GET university */
    router.get('/', university_controlers.university_view_all_Page );
    /* GET detail university page */
router.get('/detail', university_controlers.university_view_one_Page);
    module.exports = router;