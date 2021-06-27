import { getCustomRepository } from "typeorm"
import { ComplimentsRepo } from "../repositories/ComplimentsRepo"

class ListSendComplimentsService {
  async execute(user_id: string){
    const complimentsRepo = getCustomRepository(ComplimentsRepo)
    const compliments = await complimentsRepo.find({
      where: {
        user_sender: user_id
      }
    })
    return compliments
  }
}

export { ListSendComplimentsService }