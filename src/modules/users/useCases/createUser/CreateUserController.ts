import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { name, email } = request.body;

            this.createUserUseCase.execute({ name, email });

            return response.status(201).json({
                success: true,
                message: "Usuário criado com sucesso.",
            });
        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message,
            });
        }
    }
}

export { CreateUserController };
