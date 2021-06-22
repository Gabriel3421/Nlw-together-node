import { getCustomRepository } from "typeorm";
import { TagsRepo } from "../repositories/TagsRepo";

class CreateTagsService {
  async execute( name: string ){
    const tagsRepository = getCustomRepository(TagsRepo)
    if(!name){
      throw new Error('Invalid name!');
    }

    const tagAlreadyExists = await tagsRepository.findOne({
      name,
    })
    if(!!tagAlreadyExists){
      throw new Error('Tag already exists!')
    }
    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return tag
  }
}

export { CreateTagsService }