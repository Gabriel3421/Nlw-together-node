import { getCustomRepository } from "typeorm";
import { ComplimentsRepo } from "../repositories/ComplimentsRepo"
import { hash } from 'bcryptjs'
import { UsersRepo } from "../repositories/UsersRepo";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_receiver, message, user_sender }: IComplimentRequest ){
    const complimentsRepository = getCustomRepository(ComplimentsRepo)
    const usersRepository = getCustomRepository(UsersRepo)
    if(user_receiver === user_sender) {
      throw new Error("Incorrect User receiver");
    }
    const userReceiverExists = await usersRepository.findOne(user_receiver);
    if(!userReceiverExists) {
      throw new Error("User receiver does not exists");
    }
    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepository.save(compliment)
    return compliment
  }
}

export { CreateComplimentService }