import { Request, Response } from "express";
import { LessonModel } from "../models/Lesson";
import Logger from "../../config/logger";

// TODO: DONE! implementar adição e novas aulas
// TODO: implementar edição de aulas existentes
// TODO: implementar exclusão de aulas
// TODO: retorar informações completas de uma aula
// TODO: retornar informações parciais de uma aula (_id, nome)

// TODO: implementar rotas

interface lesson{
    [key: string]: string | string[];
    title: string,
    url: string,
    description: string,
    comments: string[],
}


//adição e novas aulas
export async function create(req: Request, res: Response){

    try {
        const data: lesson = {
            title: req.body.title,
            url: req.body.url,
            description: req.body.description,
            comments: []
        }

        for(const key in data){
            if(data[key] === ""){
                return res.status(400).json({error: true, msg: `O campo ${key} não pode ser vazio`})
            }
        }

        const validTitle = await LessonModel.findOne({title: data.title});
        if(validTitle){
            return res.status(400).json({error: true, msg: "Já xiste uma aula com esse título, tente outro"});
        }

        const validUrl = await LessonModel.findOne({url: data.url});
        if(validUrl){
            return res.status(400).json({error: true, msg: "Já xiste uma aula com essa url, tente outra"});
        }

        const lesson = await LessonModel.create(data);
        return res.json({error: false, msg: `Aula ${lesson._id} criada com sucesso`});

    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }   
}


export async function getLesson(req: Request, res: Response) {
    try {
        const lesson = await LessonModel.findOne({_id: req.params.id});
        if(lesson){
            return res.json({error: false, msg:"Aula encontrada", lesson: lesson});
        }
        else{
            return res.status(204).json({error: true, msg: "Nenhuma aula foi encontrado com esse Id, tente usar outro"});
        }

    } catch (error) {
        Logger.error(error);
        return res.status(500).send("Estamos com alguns problemas agora, tente novamente mais tarde");
    }
}


export async function lessonById(id: string){
    try {
        const lesson = await LessonModel.findOne({_id: id});

        if(lesson){
            return lesson;
        }
        else{
            return null;
        }

    } catch (error) {
        Logger.error(error);
        return null;
    }
}
