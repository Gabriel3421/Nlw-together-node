import { getCustomRepository } from "typeorm";
import { UsersRepo } from "../repositories/UsersRepo"
import { compare, hash } from 'bcryptjs'
import { sign } from "jsonwebtoken";

interface ISessionRequest {
  email: string;
  password: string;
}

class SessionService {
  async execute({ email, password}: ISessionRequest ){
    const usersRepository = getCustomRepository(UsersRepo)
    
    const user = await usersRepository.findOne({
      email
    });

    if(!user) {
      throw new Error("Email/Password incorrect");
    }
    const passMatch = compare(password, user.password)

    if(!passMatch){
      throw new Error("Email/Password incorrect");
    }
    const token = sign({
      email: user.email
    }, "eifu12j678qhw4abdfguwe5b2fvwdu5c", {
      subject: user.id,
      expiresIn: '1d'
    })
    return token
  }
}

export { SessionService }