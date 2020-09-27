const express = require('express');
const router = express.Router();
const UserServices = require('../services/UserServices') ;

// TODO: Request body and query validation

router.post('/api/user/create', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await UserServices.create(data);
    return res.json({ success, result });
});

router.get('/api/user/findByEmail', async (req, res, next) => {
    const email = req.query.email;
    const { success, result } = await UserServices.findByEmail(email);
    return res.json({ success, result });
})

router.put('/api/user/update', async (req, res, next) => {
    const email = req.query.email;
    const data = req.body;
    const { success, result } = await UserServices.findByEmail(email, data);
    return res.json({ success, result });
})

router.delete('/api/user/delete', async (req, res, next) => {
    const email = req.query.email;
    const { success, result } = await UserServices.deleteByEmail(email);
    return res.json({ success, result });
})


module.exports = router;
