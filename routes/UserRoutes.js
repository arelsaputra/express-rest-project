const express = require('express');
const router = express.Router();
const UserServices = require('../services/UserServices') ;

// TODO: Request body and query validation

/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Create user
 *     description: Create a user data
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User' 
 *     responses:
 *       "200":
 *         description: A response boody
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/api/user/create', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await UserServices.create(data);
    return res.json({ success, result });
});

/**
 * @swagger
 * /api/user/findByEmail:
 *   post:
 *     summary: Find User
 *     description: Find a user by email
 *     tags: [User]
 *     parameters:
 *       - email: 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success find user
 */
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
