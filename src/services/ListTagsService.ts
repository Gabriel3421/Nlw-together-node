import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { TagsRepo } from "../repositories/TagsRepo"

class ListTagsService {
  async execute(){
    const tagsRepo = getCustomRepository(TagsRepo)
    const tags = await tagsRepo.find()
    return classToPlain(tags)
  }
}

export { ListTagsService }