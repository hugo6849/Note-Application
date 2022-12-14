import {fetchData, setCurrentUser, getCurrentUser} from './main.js'
//Classes/Constructors

class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  getUsername() {
    return this.userName;
  }
}
  
  class Note {
    constructor(noteContent, userID) {
      this.noteContent = noteContent;
      this.userID = userID;
    }
  
    getNote() {
      return this.note;
    }
  }
  
  class Login {
    constructor(userName, password) {
      this.userName = userName;
      this.password = password;
    }
  
    getUserName() {
      return this.userName;
    }
  
    getPassWord() {
      return this.passWord ;
    }
  }
  
  //When the user clicks on the submit, we will run the function

  let userForm = document.getElementById("Registraion")
  if(userForm) userForm.addEventListener('submit', register);
  
  let noteForm = document.getElementById("noteForm");
  if (noteForm) noteForm.addEventListener("submit", createNote);
  
  let loginForm = document.getElementById("userLogin");
  if(loginForm) loginForm.addEventListener('submit', userLogin);

  /**Function will run when a user creates an account*/
  function register(e) {
    e.preventDefault();

    let name = document.getElementById("username").value;
    let pswd = document.getElementById("password").value;
    let user = new User(name, pswd);

    fetchData("/users/register", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location = "homepage.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }
  
  

  function createNote(e) {
    e.preventDefault();
  
    let noteContent = document.getElementById("noteContent").value;
    let user = getCurrentUser().userID;
    console.log(user);
    const note = new Note(noteContent, user);
    fetchData("/notes/createNote", note, "POST")
    .then((data) =>{
      window.location = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
    })
    console.log(note);
  }
  
  function userLogin(e) {
    e.preventDefault();

    let name = document.getElementById("username").value;
    let pswd = document.getElementById("password").value;
    let login = new Login(name, pswd);

    fetchData("/users/login", login, "POST")
    .then((data) =>{
      setCurrentUser(data);
      window.location ="index.html";
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }