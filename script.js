
const accessToken = localStorage.getItem('accessToken');
const contentDiv = document.getElementById('content');
const signupPage = document.getElementById('signup-form');
const profilePage = document.getElementById('profilepage');
const signupMessage = document.getElementById('signupMessage');
const profileMessage = document.getElementById('profileMessage');

const password = document.getElementById('ippassword').value;

const profullname = document.getElementById('dispfullname');
const propassword = document.getElementById('yourpassword');
const proemail = document.getElementById('youremail');
const protoken = document.getElementById('token');

//checking accestoken

if (accessToken) {
  
  //contentDiv.removeChild(signupPage);
  console.log("accesstokenpresent");
  signupPage.style.display = 'none';
  //profileMessage.textContent = 'Welcome back to your profile!';
  
  profilePage.style.display = 'block';
  document.getElementById('profilelogout').addEventListener('click', logout);
  
} 
else {
    console.log("accesstokenNOTpresent");
  //contentDiv.removeChild(profilePage);
  profilePage.style.display = 'none';
  signupPage.style.display = 'block';

  document.getElementById('signupbtn').addEventListener('click', signup);
  

}


function generateAccessToken() {
    console.log("accesstokenGeneration");
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}


function signup() {
    
    console.log("signup");
  const username = document.getElementById('ipfullname').value;
  const password = document.getElementById('ippassword').value;
  const fullname = document.getElementById('ipfullname').value;
  const email = document.getElementById('ipemail').value;

  if (!username || !password) 
  {
    error.textContent = 'Please fill in all fields.';
    return;
  }

  
  const accessToken = generateAccessToken();

  
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('LSfullname', username);

  localStorage.setItem('email', email);
  localStorage.setItem('fullname', fullname);


  
  //contentDiv.removeChild(signupPage);
  signupPage.style.display = 'none';
  //profileMessage.textContent = `Signup successful. Welcome to your profile, ${username}!`;
  profullname.innerText=`Full Name : ${fullname}`;
  proemail.innerText=`Email : ${email}`;
  propassword.innerText=`Password : ${password}`;
  protoken.innerText=`Access Toekn: ${accessToken}`;
  profilePage.style.display = 'block';
  console.log("signup working");
  document.getElementById('profilelogout').addEventListener('click', logout);

}


function logout() {
    console.log("logout");
  
  localStorage.removeItem('accessToken');
  localStorage.removeItem('fullname');
  //contentDiv.removeChild(profilePage);
  profilePage.style.display = 'none';
  signupPage.style.display = 'block';
  //signupMessage.textContent = 'You have been logged out successfully.';
  document.getElementById('signupbtn').addEventListener('click', signup);
  console.log("signup working");
}




