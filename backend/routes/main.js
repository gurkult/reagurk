const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static('../../reagurk/src/'));
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../", "reagurk", "public", "index.html"));
});

module.exports = router;
