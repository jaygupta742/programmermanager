const express = require('express');
const router = express.Router();
// @route POST api/users
// @acess Public
router.post('/', (req, res) => {
    res.send(req.body)
    console.log(req.body);
});

module.exports = router;