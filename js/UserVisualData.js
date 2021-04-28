var Username = sessionStorage.getItem("currentusername");
document.getElementById("username01").innerHTML = "Welcome, " + Username;
document.getElementById("username02").innerHTML = "You Are Logged In As " + Username;
document.getElementById("username03").innerHTML = Username;