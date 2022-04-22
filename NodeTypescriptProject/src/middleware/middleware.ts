
import { Request, Response, NextFunction } from 'express';
/**
 * Middleware
 * 
 * @param req 
 * @param res 
 * @param next
 * @returns 
 */
export default async function authenticatedUser(req: Request, res: Response, next: NextFunction) {
    if (req.headers.email !== undefined) {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorised access!!" });
    }
}