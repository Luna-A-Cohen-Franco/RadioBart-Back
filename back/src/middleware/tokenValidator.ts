import jwt from "jsonwebtoken";
import { Request as IReq, Response as IRes, NextFunction as INext } from "express";


export interface Payload {
    id: number;
}

export interface PayloadAdmin {
    id: number;
    role: boolean;
}

export interface CustomRequest extends IReq {
    payload: Payload;
}

export interface CustomRequestAdmin extends IReq {
    payload: PayloadAdmin;
}

export const authenticateToken = (req: IReq, res:IRes, next: INext) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET || "secret", (err, user) => {
        if (err) return res.sendStatus(403).json(err);
        if (user) {
            (req as CustomRequest).payload = user as Payload;
            next();
        } else {
            res.sendStatus(500); 
        }
    });
}

export const authenticateTokenAdmin = (req: IReq, res:IRes, next: INext) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET || "secret", (err, user) => {
        if (err) return res.sendStatus(403).json(err);
        if (user) {
            (req as CustomRequestAdmin).payload = user as PayloadAdmin;
            next();
        } else {
            res.sendStatus(500); 
        }
    });
}