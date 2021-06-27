import { getCustomRepository } from "typeorm"
import { ComplimentsRepo } from "../repositories/ComplimentsRepo"

class ListReceiveComplimentsService {
  async execute(user_id: string){
    const complimentsRepo = getCustomRepository(ComplimentsRepo)
    const compliments = await complimentsRepo.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    })
    return compliments
  }
}

export { ListReceiveComplimentsService }