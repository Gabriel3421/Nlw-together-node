import { getCustomRepository } from "typeorm";
import { UsersRepo } from "../repositories/UsersRepo"
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ email, name, admin = false, password}: IUserRequest ){
    const usersRepository = getCustomRepository(UsersRepo)
    if(!email) {
      throw new Error("Email incorrect");
    }
    const userAlreadyExists = await usersRepository.findOne({
      email
    });
    if(userAlreadyExists) {
      throw new Error("User already exists");
    }
    const passwordHashed = await hash(password, 8);
    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHashed
    })
    await usersRepository.save(user)
    const userParsed = {
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      created_at: user.created_at,
      updated_at: user.updated_at,
    }
    return userParsed
  }
}

export { CreateUserService }