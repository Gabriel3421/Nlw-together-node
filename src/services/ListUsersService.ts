import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UsersRepo } from "../repositories/UsersRepo"

class ListUsersService {
  async execute(){
    const usersRepo = getCustomRepository(UsersRepo)
    const user = await usersRepo.find()
    return classToPlain(user)
  }
}

export { ListUsersService }