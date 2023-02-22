"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// In a file called "users.ts"
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('List of users');
});
router.post('/', (req, res) => {
    res.send('Create a new user');
});
exports.default = router;
//# sourceMappingURL=users.router.js.map