import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { UserResolver } from './resolvers/user'

const PORT = process.env.PORT || 4000
const HOST = '0.0.0.0'

async function bootstrap () {
  const schema = await buildSchema({
    resolvers: [UserResolver]
  })

  const server = new ApolloServer({
    schema,
    playground: true
  })

  const { url } = await server.listen(PORT, HOST)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
