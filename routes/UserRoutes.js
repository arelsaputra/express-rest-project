const express = require('express');
const router = express.Router();
const UserServices = require('../services/UserServices') ;

// TODO: Request body and query validation

router.post('/api/user/create', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await UserServices.create(data);
    return res.json({ success, result });
});

router.get('/api/user/findById', async (req, res, next) => {
    const id = req.query.id;
    const { success, result } = await UserServices.findById(id);
    return res.json({ success, result });
})

module.exports = router;
