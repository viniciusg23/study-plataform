import { Request, Response } from "express";
import { ModuleModel } from "../models/Module";
import { existLesson } from "./lessonControllers";
import Logger from "../../config/logger";


// TODO: DONE! implementar cadastro de novos módulos

// TODO: implementar atualização de módulos
// TODO: implementar exclusão de módulos
// TODO: implementar retorno de todo o conteúdo total de um módulo pelo ID

// TODO: implementar rotas

interface module{
    [key: string]: string | string[];
    title: string,
    subtitle: string,
    lessons: string[],
    description: string,
    subject: string[],
    logo: string
}


//cadastro de novos módulos
export async function create(req: Request, res: Response) {
   
    try {
        const data: module = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            lessons: [],
            description: req.body.description,
            subject: req.body.subject,
            logo: req.body.logo
        }

        for(const key in data){
            if(data[key] === ""){
                return res.status(400).json({error: true, msg: `O campo ${key} não pode ser vazio`})
            }
        }

        const module = await ModuleModel.create(data);
        return res.json({error: false, msg: `módulo ${module._id} criado com sucesso`});

    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}


export async function addLesson(req: Request, res: Response){
    
    try {
        const lessonId = req.body.lessonId;
        const moduleId = req.body.moduleId;

        if(await existLesson(lessonId)){
            
            const result = await ModuleModel.updateOne({_id: moduleId}, {$push: {lessons: lessonId}});
            
            if (result.modifiedCount > 0) {
                return res.json({error: false, msg: "Aula adicionada ao módulo com sucesso"});
            } 
            else {
                return res.status(400).json({error: true, msg: "Módulo não atualizado, verifique os ids"});
            }
            
          
        }
        else{
            return res.status(400).json({error: true, msg: "Id referente a aula é inválido, verifique se está correto"});
        }

        
    } catch (error) {
        
    }
}


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

