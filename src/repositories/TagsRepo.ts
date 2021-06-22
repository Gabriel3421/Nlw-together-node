import { EntityRepository, Repository } from 'typeorm'
import { Tag } from '../entities/Tag'

@EntityRepository(Tag)
class TagsRepo extends Repository<Tag> {

}

export {TagsRepo}