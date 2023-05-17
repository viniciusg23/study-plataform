import { Request, Response } from "express";
import { ModuleModel } from "../models/Module";
import Logger from "../../config/logger";


// TODO: implementar cadastro de novos módulos
// TODO: implementar atualização de módulos
// TODO: implementar exclusão de módulos
// TODO: implementar retorno de todo o conteúdo total de um módulo pelo ID

// TODO: implementar rotas






export async function modulesIntro(req: Request, res: Response) {
    try {
        const modules = await ModuleModel.find({}).select("-classes -description -subject");

        return res.json({error: false, modules: modules});
    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}

export async function moduleById(req: Request, res: Response){
    try {
        
    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}

