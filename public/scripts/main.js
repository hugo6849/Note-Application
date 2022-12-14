

const userpage = document.querySelector('.text-1-content');
if(getCurrentUser()) {

  if(userpage){

    let user = getCurrentUser();
    userpage.innerHTML = `
    <div class= 'mainmenu'>
        <a href="note.html">Write a new note</a>
        <a href="index.html" id="logout">Logout</a>

        <div class='noteSection'>
        </div>
    </div>
    
    <div id ="usr-notes">
        <h1>${user.userName}'s Notes</h1>
    <div>`
  }
}

// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  } 

let logout = document.getElementById("logout");
if(logout) logout.addEventListener('click', removeCurrentUser)


export function setCurrentUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}

export function getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
}

export function removeCurrentUser(){
    localStorage.removeItem('user');
}