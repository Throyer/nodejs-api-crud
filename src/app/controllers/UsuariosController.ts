import { getRepository, Repository } from "typeorm";
import { Usuario } from "../models/Usuario";
import { Page } from "../shared/Page";
import { Request, Response } from "express";

class UsuariosController {

    async index(req: Request, res: Response<Page<Usuario>>): Promise<Response<Page<Usuario>>> {

        let { nome, page, size }: any = req.query;
    
        page = page ? parseInt(page, 10) : 1;
        size = size ? parseInt(size, 10) : 10;
    
        const where: any = {};
    
        const options = {
            skip: (page - 1) * size,
            take: size,
            where
        };
    
        if (nome) {
            options.where.nome = nome;
        }
    
        const [content, count] = await getRepository(Usuario).findAndCount(options);
    
        const pagina = new Page<Usuario>({
            content,
            count,
            page,
            size
        })
    
        return res.json(pagina);
    }
    
    async show(req: Request, res: Response<Usuario>): Promise<Response<Usuario>> {
        const { id } = req.params;
        const usuario = await getRepository(Usuario).findOne(parseInt(id));
        return res.json(usuario);
    }
    
    async store(req: Request, res: Response<Usuario>): Promise<Response<Usuario>> {
        const { body }: { body: Usuario } = req.body;
        const usuario = await getRepository(Usuario).save(body);
        return res.json(usuario);
    }
    
    async update(req: Request, res: Response<Usuario>): Promise<Response<Usuario>> {
        const { id } = req.params;
        const { body }: { body: Usuario } = req.body;
    
        const exists = await getRepository(Usuario).findOne(parseInt(id));
    
        if (!exists) {
            return res.status(404).json();
        }
        const usuario = await getRepository(Usuario).save(body)
        return res.status(201).json(usuario);
    }
    
    async destroy(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        getRepository(Usuario).delete(parseInt(id));
        return res.json();
    }
}

export default new UsuariosController();