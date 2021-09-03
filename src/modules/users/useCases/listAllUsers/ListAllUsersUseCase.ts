import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute(): User[] {
        const listUsers = this.usersRepository.list();

        return listUsers;
    }
}

export { ListAllUsersUseCase };
