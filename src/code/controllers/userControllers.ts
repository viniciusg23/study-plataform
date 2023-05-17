import config from "config";
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/User";
import Logger from "../../config/logger";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// TODO: implementar marcar aula como assistida


export async function register(req: Request, res: Response) {
    
    type dataInterface = {
        name: string,
        email: string,
        password: string,
        watchedClasses: Array<string>,
        isAdmin: boolean
    }

    const data: dataInterface = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 15),
        watchedClasses: [],
        isAdmin: false
    }

    try {
       
        const validUser = await UserModel.findOne({email: data.email})
        if(!validUser){
            await UserModel.create(data);
            return res.json({error: false, mgs: "Usuário cadastrado com sucesso"});
        }
        else{
            return res.status(400).json({error: true, msg: "Email já cadastrado, tente fazer login"});
        }
        
    } catch (error: any) {
        Logger.error(`Error in registerUser: ${error}`);
        return res.status(500).json({error: true, msg: "Houve um erro, tente novamente mais tarde"});   
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserModel.findOne({email: req.body.email});

        if(!user){
            return res.status(400).json({error: true, msg: "Email ou senha incorretos"});
        }

        const validHash = bcrypt.compareSync(req.body.password, user.password);
        if(validHash){
            //sucess
            if(user.isAdmin){
                next();
            }
            else{
                const token = jwt.sign({username: user.name, _id: user._id}, config.get<string>("jwtSecret"))
                return res.json({error: false, mgs: "Login efetuado com sucesso", token: token});
            }
            
        }
        else{
            //fail
            return res.status(400).json({error: true, msg: "Email ou senha incorretos"});
        }

    } catch (error: any) {
        Logger.error(`Error in registerUser: ${error}`);
        return res.status(500).json({error: true, msg: "Houve um erro, tente novamente mais tarde"});   
    }
}