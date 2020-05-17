import { Request, Response } from "express";

class PermissoesController {

    async index(req: Request, res: Response) {
        return res.json([]);
    }

    async show(req: Request, res: Response) {
        return res.json({ message: "Not implemented" });
    }

    async store(req: Request, res: Response) {
        return res.json({ message: "Not implemented" });
    }

    async update(req: Request, res: Response) {
        return res.json({ message: "Not implemented" });
    }

    async destroy(req: Request, res: Response) {        
        return res.json({ message: "Not implemented" });
    }
}

export default new PermissoesController();