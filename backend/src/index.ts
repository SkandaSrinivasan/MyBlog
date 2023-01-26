
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './typedefs.js'
import {resolvers} from './resolvers.js'



const server = new ApolloServer({ resolvers, typeDefs });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);