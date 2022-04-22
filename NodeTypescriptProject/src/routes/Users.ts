import StatusCodes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import UserDao from '@daos/User/UserDao.mock';
import { paramMissingError } from '@shared/constants';
const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;
import session from "express-session";
/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllUsers(req: Request, res: Response) {
    const users = await userDao.getAll();
    console.log(users, "545454545");
    return res.status(OK).json({ users });
}


/**
 * Add one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneUser(req: Request, res: Response) {
    const { user } = req.body;
    if (!user) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await userDao.add(user);
    return res.status(CREATED).json({
        message: "Data Added in Json File"
    });
}


