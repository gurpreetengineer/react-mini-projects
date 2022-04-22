import { Router } from 'express';
import { getAllUsers, addOneUser } from './Users';

import userAuthentication from "../middleware/middleware";

// User-route
const userRouter = Router();
userRouter.get('/all', userAuthentication, getAllUsers);
userRouter.post('/add', addOneUser);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
export default baseRouter;
