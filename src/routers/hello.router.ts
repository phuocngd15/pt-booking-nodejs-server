import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     description: Returns a simple greeting message to the caller
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Your name
 *     responses:
 *       200:
 *         description: A hello message
 */
router.get('/', (req, res) => {
    const name = req.query.name || 'world';
    res.send(`Hello, ${name}!`);
});

export default router;
