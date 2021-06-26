import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../entities/Compliment'

@EntityRepository(Compliment)
class ComplimentsRepo extends Repository<Compliment> {

}

export {ComplimentsRepo}