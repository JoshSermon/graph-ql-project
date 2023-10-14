const { userList, UserList } = require("../fakeData");

const resolvers = { 
    Query: {
        users() {

            return UserList;
        }
    }

}

module.exports = { resolvers }