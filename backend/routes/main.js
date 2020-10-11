const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Gurkan cult");
});

module.exports = router;
