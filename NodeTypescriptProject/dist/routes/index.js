"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = require("./Users");
// User-route
const userRouter = express_1.Router();
userRouter.get('/all', Users_1.authenticatedUser, Users_1.getAllUsers);
userRouter.post('/add', Users_1.addOneUser);
// Export the base-router
const baseRouter = express_1.Router();
baseRouter.use('/users', userRouter);
exports.default = baseRouter;
