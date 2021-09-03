import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;

        this.turnUserAdminUseCase.execute({ user_id });

        return response.status(201).json({
            success: true,
            message: "Usuário virou um administrador.",
        });
    }
}

export { TurnUserAdminController };
