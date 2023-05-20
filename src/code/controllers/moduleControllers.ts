import { Request, Response } from "express";
import { ModuleModel } from "../models/Module";
import { getLesson, lessonById } from "./lessonControllers";
import Logger from "../../config/logger";


// TODO: DONE! implementar cadastro de novos módulos
// TODO: DONE! implementar adição de aulas 
// TODO: implementar atualização de módulos
// TODO: implementar exclusão de módulos
// TODO: DONE! implementar retorno de todo o conteúdo total de um módulo pelo ID
// TODO: DONE! implementar retorno da introdução de todos módulos 

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
        const lessonId: string = req.body.lessonId;
        const moduleId: string = req.body.moduleId;

        const newLesson = await lessonById(lessonId);
        if(newLesson){

            const result = await ModuleModel.updateOne({_id: moduleId}, {$push: {lessons: {
                _id: newLesson._id, 
                name: newLesson.title
            }}});
            
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
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}


export async function modulesIntro(req: Request, res: Response) {
    try {
        const modules = await ModuleModel.find({}).select("-lessons -description -subject");

        if(modules){
            return res.json({error: false, msg: "Módulos encontrados", modules: modules});
        }
        else{
            return res.status(204).json({error: true, msg: "Nenhum módulo foi encontrado", modules: modules});
        }
        
    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}

export async function getModule(req: Request, res: Response){
    try {
        const module = await ModuleModel.findOne({_id: req.params.id});

        if(module){
            return res.json({error: false, msg: "Módulo encontrado", module: module});
        }
        else{
            return res.status(400).json({error: true, msg: "Nenhum módulo foi encontrado com esse id, verifique o id que foi enviado", module: module});
        }
    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}


export async function moduleLessons(req: Request, res: Response) {
    try {
        const module = await ModuleModel.findOne({_id: req.params.id});
        const lessons = [];

        for(const lesson of module!.lessons){
            const l = await lessonById(lesson._id);
            if(l){
                lessons.push(l);
            }
        }

        if(lessons.length > 0){
           return res.json({error: false, msg: "Aulas encontradas", lessons: lessons});
        }
        else{
            return res.status(204).json({error: true, msg: "Nenhuma aula encontrada"});
        }
        
    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}

