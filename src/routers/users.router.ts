// In a file called "users.ts"
import express from 'express';
const router = express.Router();
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags:
 *         - Users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', (req, res) => {
    res.send('List of users');
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *         - Users
 *     description: Create a new user.
 *     responses:
 *       200:
 *         description: Create a new user
 */
router.post('/', (req, res) => {
    res.send('Create a new user');
});

export default router;
