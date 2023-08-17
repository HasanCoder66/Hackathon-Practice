// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAE4eKI6WUJucGJhZDYEvY8Ly2ACS6R28U",
  authDomain: "al-aziz-project.firebaseapp.com",
  projectId: "al-aziz-project",
  storageBucket: "al-aziz-project.appspot.com",
  messagingSenderId: "849529810397",
  appId: "1:849529810397:web:928d7c4681d1b503635a34",
  measurementId: "G-4P3HH067LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);







const firstName = document.querySelector('#firstName ')
// console.log(firstName.value)

const surName = document.querySelector('#surName')
// console.log(surName.value)

const signupEmail = document.querySelector('#signup-Email')
console.log(signupEmail.value)

const signupPassword = document.querySelector('#signup-Password')
// console.log(signupPassword.value)

const userMobile = document.querySelector('#userMobNum')
// console.log(userMobile.value)

const cPassword = document.querySelector('#C-Password')
// console.log(cPassword)

const signupBtn = document.querySelector('#signup-btn')
// console.log(signupBtn)

const loginBtn = document.querySelector('#loginBtn')
// console.log(loginBtn)

const loginEmail = document.querySelector('#loginEmail')
// console.log(loginEmail)

const loginPassword = document.querySelector('#loginPassword')
// console.log(loginPassword)





function loginHandler() {

   
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(loginEmail.value)
            // console.log(loginPassword.value)
            if (user) {
                alert('User mil gaya')
                window.location.href = './dashboard/dashboard.html'
            } else {
                alert('bhai nhi mil raha to kahan chala gaya')
            }
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            // console.log(errorCode);
            // console.log(errorMessage);
        });
}



function signupHandler() {
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                alert('User SignUp SuccessFully')
                console.log(user)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode)
            // console.log(errorMessage)

        })

}


signupBtn.addEventListener('click', signupHandler)
loginBtn.addEventListener('click', loginHandler)