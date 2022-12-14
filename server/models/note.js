const con = require("./db_connect");

async function createTable(){
    let sql=`CREATE TABLE IF NOT EXISTS notes (
        noteID INT NOT NULL AUTO_INCREMENT,
        noteContent VARCHAR(255),
        userID INT NOT NULL,
        CONSTRAINT notePK PRIMARY KEY(noteID),
        CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
    );`
    await con.query(sql);
}
createTable();

async function getNote(note) {
    const sql = `SELECT * FROM (notes)
    WHERE userID = ("${note.userID}")`;
    return await con.query(sql);
}

async function createNote(note){
    const sql = `INSERT INTO notes (noteContent, userID)
    VALUES ("${note.noteContent}", "${note.userID}");
    `
    return await con.query(sql); 
}

module.exports = { getNote, createNote};