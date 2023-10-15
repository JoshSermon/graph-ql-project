const { userList, UserList } = require("../fakeData");

const resolvers = { 
    Query: {
        users: () => {
            return UserList;
        },
        user: (_, args) => {
          const id = args.id;
        }
    }

}

module.exports = { resolvers }