import config from "config";
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/User";
import Logger from "../../config/logger";
import jwt from "jsonwebtoken";


export async function auth(req: Request, res: Response, next: NextFunction) {

    interface JwtPayload {
        _id: string
    }

    try {
        if(req.headers.authorization){
            const validation = jwt.verify(req.headers.authorization, config.get("jwtSecret")) as JwtPayload
            if(validation){
                const admin = await UserModel.findOne({_id: validation._id})

                if(admin?.isAdmin){
                    next();
                }
                else{
                    return res.status(401).json({error: true, msg: "Acesso Negado"});
                }
            }
            
        }
        
    } catch (error) {
        Logger.error(`Error in registerUser: ${error}`);
        return res.status(500).json({error: true, msg: "Houve um erro, tente novamente mais tarde"});   
    }
}