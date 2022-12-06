const con = require("./db_connect");

async function createTable(){
    let sql=`CREATE TABLE IF NOT EXISTS users (
        userID INT NOT NULL AUTO_INCREMENT,
        userNAME VARCHAR(255) NOT NULL UNIQUE,
        userFirstName VARCHAR(255) NOT NULL,
        userLastName VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        CONSTRAINT userPK PRIMARY KEY(userID)
    );`
    await con.query(sql);
}
createTable();

async function getUsers() {
    const sql = `SELECT * FROM users;`;
    let users = await con.query(sql);
    console.log(users)
}

async function register(user){
    let cUser = await getUsers(user);
    if(cUser.length > 0) throw Error("Username already in use");

    const sql = `INSERT INTO users (userName, password)
    VALUES ("${user.userName}", "${user.password}");
    `
    await con.query(sql);
    return await login(user);
}

async function login(user){
    let cUser = await getUsers(user);
    if(!cUser[0]) throw Error("Username not found!");
    if(!cUser.password !== user.password) throw Error("Password Incorrect");

    return cUser[0];
}

async function editUser(user) {
    let sql = `UPDATE users 
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

async function deleteUser(user) {
    let sql = `DELETE FROM users
      WHERE userID = ${user.userID}
    `
    await con.query(sql);
}

async function getUser(user) {
    let sql;
  
    if(user.userID) {
      sql = `
        SELECT * FROM users
         WHERE userID = ${user.userID}
      `
    } else {
      sql = `
      SELECT * FROM users 
        WHERE userName = "${user.userName}"
    `;
    }
    return await con.query(sql);  
}

module.exports = { getUsers, login, register, editUser, deleteUser};