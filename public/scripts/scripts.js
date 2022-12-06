//Classes/Constructors
class User {
    constructor(userName, firstName, lastName, passWord) {
      this.user = userName;
      this.userfName = firstName;
      this.userlName = lastName;
      this.userPass = passWord;
    }
  }
  
  class Note {
    constructor(note) {
      this.newNote = note;
    }
  
    getNote() {
      return this.note;
    }
  
    setNote(newNote) {
      this.note = newNote;
    }
  }
  
  class Login {
    constructor(userName, passWord) {
      this.uName = userName;
      this.pWord = passWord;
    }
  
    getUserName() {
      return this.uName;
    }
  
    getPassWord() {
      return this.pWord;
    }
  }
  
  //When the user clicks on the submit, we will run the function
  let usrButton = document.getElementById("userListButton");
  usrButton.addEventListener("click", getUsers);

  let userForm = document.getElementById("Registraion");
  if (userForm != null) {
    userForm.addEventListener("submit", createUser);
  }
  
  let noteForm = document.getElementById("noteWrite");
  if (noteForm != null) {
    noteForm.addEventListener("submit", createNote);
  }
  
  let loginForm = document.getElementById("userLogin");
  if (loginForm != null) {
    loginForm.addEventListener("submit", userLogin);
  }
  
  //Functions
  function getUsers(){
   fetch("http://localhost:3000/users")
   .then((response) => response.json())
   .then((data) => {
    let userList = document.getElementById('userList');
    userList.classList.toggle('hide');
    data.forEach((user) => {
      let section = 
      `<div=>${user.userName}</div>`
      userList.innerHTML+=section;
    });
   })
  }

  function createUser(e) {
    /**
     * Used to stop page from reloading keeping this for developmental purposes
     * REMEMBER TO DELETE THIS ON THE FINISHED PROJECT OR ADJUST IT
     */
    e.preventDefault();
  
    //Get the fields from the inputs to use to create a new object
    let userName = document.getElementById("uname").value;
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let pass = document.getElementById("password").value;
  
    //Create a new object using variables based on the user fields.
    const user = new User(userName, fName, lName, pass);
    console.log(user);
  }
  
  function createNote(e) {
    e.preventDefault();
  
    let newNote = document.getElementById("noteContent").value;
    const note = new Note(newNote);
    console.log(note);
  }
  
  function userLogin(e) {
    e.preventDefault();
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
  
    const login = new Login(userName, passWord);
    console.log(login);
  }