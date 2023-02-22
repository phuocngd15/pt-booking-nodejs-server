"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
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
router.get('/hello', (req, res) => {
    const name = req.query.name || 'world';
    res.send(`Hello, ${name}!`);
});
exports.default = router;
//# sourceMappingURL=hello.js.map