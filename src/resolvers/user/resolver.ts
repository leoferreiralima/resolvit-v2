import { Query, Resolver } from 'type-graphql'

import { User } from './type'

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users () {
    return []
  }
}
