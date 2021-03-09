    function Login() {
    useremail = document.getElementById("email_field").value;
    userpassword = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    
    var off=document.getElementById('logged');
    if (off.style.display == "none") {
        off.style.display = "block";
    } else {
        off.style.display = "none";
    }
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    window.alert(useremail + " " + userpassword);
    }

  function Logout() {
    firebase.auth().signOut().then(() => {
      //success
      location.replace("/Ampersan/index.html");
    }).catch((error) => {
      // An error happened.
    });
  }

    function Signup() {
      useremail = document.getElementById("email_field").value;
      userpassword = document.getElementById("password_field").value;

      firebase.auth().createUserWithEmailAndPassword(useremail, userpassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
      var off=document.getElementById('logged');
      if (off.style.display == "none") {
          off.style.display = "block";
      } else {
          off.style.display = "none";
      }
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }

  function adminloginbypass() {
      location.replace("/Ampersan/Apps.html");
  };