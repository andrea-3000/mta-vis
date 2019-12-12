import API from "./api";

const container = document.querySelector('.map-overlay-right')

// Set up button to toggle container
document.querySelector('.right__button')
  .addEventListener('click', function(){
    if(container.classList.contains('open')){
      container.classList.remove('open');
    }else{
      container.classList.add('open');
    }
  });

// Function to hide login screen and set user
function setUser(name){
  console.log(`Welcome, ${name}!`);
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.user-favs').classList.remove('hidden');

  const fills = document.querySelectorAll('[data-fill="username"]');
  for(const f of fills) f.innerText = name;
}
function undoUser(){
  console.log(`Goodbye!`);
  document.querySelector('.login-form').classList.remove('hidden');
  document.querySelector('.user-favs').classList.add('hidden');

  const fills = document.querySelectorAll('[data-fill="username"]');
  for(const f of fills) f.innerText = "";

}

// Test initial login status
var cookie_jwt = API.getCookie('jwt');
if(cookie_jwt){
  API.checkLogin(cookie_jwt).then( (success) => {
    if(success && success.user && success.user.name){
      setUser(success.user.name);
    }else{
      // invalid JWT
    }
  });
}else{
  // Not logged in
}


// Set up login button listeners
const usernameInput = document.querySelector('.login--username');
const passwordInput = document.querySelector('.login--password');
const loginButton = document.querySelector('.login-form__button');

usernameInput
.addEventListener('blur', async function(){
  if( await API.userExists(this.value) ){
    loginButton.innerText = "Log in";
    loginButton._intent = "login";
  }else{
    loginButton.innerText = "Sign up";
    loginButton._intent = "create";
  }
});

loginButton.addEventListener('click', async function(){
  console.log(this._intent)
  const res = this._intent == 'create'
    ? await API.createAndLogin(usernameInput.value, passwordInput.value)
    : await API.loginUser(usernameInput.value, passwordInput.value);
  // set cookie if valid
  if(res.jwt){
    API.setCookie('jwt', res.jwt, 30); // expires in 30 days
    setUser(res.name);
  }else{
    console.error('Login error:', res);
  }
});

document.querySelector('.user-favs__logout')
.addEventListener('click', function(){
  API.eraseCookie('jwt');
  undoUser();
});

// Load statuses from API
const STATUS_TEXT = (t) => t.toLowerCase();
const STATUS_CLASS = {
  'GOOD SERVICE': 'status--good',
  'PLANNED WORK': 'status--planned',
  'DELAYS': 'status--delays',
  'PART SUSPENDED': 'status--suspended',
  'SUSPENDED': 'status--suspended',
};
async function loadStatus(){
  const data = await fetch('https://comp426.peterandringa.com/mta/status').then(res => res.json());
  if(!data || !data.lines) return console.error('Could not load line status.');
  for(const line of Object.keys(data.lines)){
    const text = document.querySelector(`.group--${line.toLowerCase()} .status-group__status`);
    text.innerText = STATUS_TEXT(data.lines[line].status);
    
    text.classList.remove(...Object.values(STATUS_CLASS));
    text.classList.add(STATUS_CLASS[data.lines[line].status])
  }
}

loadStatus();

setInterval(loadStatus, 60*1000);
