import {fetchData, getCurrentUser} from "./main.js";
class Note {
    constructor(noteContent, userID) {
      this.noteContent = noteContent;
      this.userID = userID;
    }
  
    getNote() {
      return this.note;
    }
}

let user = getCurrentUser();

let noteSection = document.getElementById("notes");

function getNotes(){
    let Notes; 
    let id = user.userID;
    let note = new Note("", id);
    fetchData('/notes/getNote', note, "POST")
    .then((data) => {
      let notesSection = document.querySelector(".notes");
      Notes = JSON.parse(JSON.stringify(data));
      for(let x in Notes){
        console.log(Notes[x].noteContent);
        let section = `
          <p>${Notes[x].noteContent}</p>
        `
        notesSection.innerHTML += section;
      }
    }
    )
}

getNotes();



