const form = document.getElementById('form');
const socket = io();

// Check user name is unique
function logSubmit(e) {
  // Get username from form
  const username = e.target.elements.username.value;
  // Tell backend we have a new user request
  socket.emit('newUser', username);
  // Backend confirms user is unique (let them continue)
  socket.on('uniqueUser', (message) => {
    console.log('user is unique');
  });
  // User is not unique, send to home page
  socket.on('duplicateUser', (message) => {
    window.location = 'http://localhost:3000/index.html';
  });
}

form.addEventListener('submit', logSubmit);
