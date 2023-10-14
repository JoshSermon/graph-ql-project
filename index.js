const { ApolloServer } = require("apollo-server");
const { typeDefs } = require('../graph-ql-project/schema/type-defs');
const { resolvers } = require('../graph-ql-project/schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(( {url} ) => {
    console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});