const users = [
    {
        userId:1,
        userName: "user1",
        password: "password"
    },
    {
        userId:2,
        userName: "user2",
        password: "password"
    },
    {
        userId:3,
        userName: "user3",
        password: "password"
    },

];

let getUsers = () => users;

module.exports = { getUsers };