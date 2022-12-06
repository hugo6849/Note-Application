const con = require("./db_connect");

async function createTable(){
    let sql=`CREATE TABLE IF NOT EXISTS notes (
        noteID INT NOT NULL AUTO_INCREMENT,
        noteContent VARCHAR(1024) NOT NULL,
        CONSTRAINT notePK PRIMARY KEY(noteID)
    );`
    await con.query(sql);
}
createTable();

async function getNote() {
    const sql = `SELECT * FROM notes;`;
    let notes = await con.query(sql);
    console.log(notes)
}

async function createNote(note){
    const sql = `INSERT INTO notes (noteContent)
    VALUES ("${note.noteContent}");
    `
    await con.query(sql);
    return await con.query(sql); 
}

async function editNote(note) {
    let sql = `UPDATE notes 
    SET noteContent = "${note.noteContent}"
    WHERE noteID = ${note.noteID}
  `;

  await con.query(sql);
  return await con.query(sql); 
}

async function deleteNote(note) {
    let sql = `DELETE FROM notes
      WHERE noteID = ${note.noteID}
    `
    await con.query(sql);
}

module.exports = { getNote, createNote, editNote, deleteNote};