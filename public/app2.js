//(----------------------------------------------CONTACT US FORM FIREBASE INTEGRATION STARTS---------------------------------------------)

// Your web app's Firebase configuration
var firebaseConfig ={
    apiKey: "AIzaSyApAlQUmDSl7jxMQAmamlOsQqHc-sJimZ0",
     authDomain: "sharezop.firebaseapp.com",
    projectId: "sharezop",
    storageBucket: "sharezop.appspot.com",
    messagingSenderId: "509652847690",
    appId: "1:509652847690:web:dd6a8394e6ad0e09c6aab3",
    measurementId: "G-V03FKW657M"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Till here everything permanent.

// Reference contactInfo collections
var contactInfo = firebase.database().ref("contactqueries");

//Listening submission
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e)
{
    e.preventDefault();
    
    //Getting input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;    
    let message = document.querySelector(".message").value;
    console.log(name,email,message);

    saveContactInfo(name, email, message);
}

// Save Infos to Firebase 
function saveContactInfo(name, email, message)
{
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,        
        message: message,
    });
}
