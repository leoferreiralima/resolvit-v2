import { Query, Resolver } from 'type-graphql'

import { User } from './type'

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async users () {
    return []
  }
}

export { UserResolver }
