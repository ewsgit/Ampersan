var appname = "settings";

  document.getElementById("windows").innerHTML += "<!--Auto Window Generation Beta was used for this window below-->";
  document.getElementById("windows").innerHTML += "<div class=window id=window" + appname + "></div>";
  document.getElementById("window" + appname).innerHTML += "<script id=" + appname + "script></script>";
  document.getElementById("window" + appname).innerHTML += "<div class=windowheader id=window" + appname + "header></div>";
  document.getElementById("window" + appname + "header").innerHTML += "<a>" + appname + "</a>";
  document.getElementById("window" + appname + "header").innerHTML += "<input type=image src=/Ampersan/assets/icons/svg/fi-rr-cross.svg class=windowactions id=" + appname + "close></input>";
  document.getElementById("window" + appname + "header").innerHTML += "<input type=image src=/Ampersan/assets/icons/svg/fi-rr-square.svg class=windowactions id=" + appname + "maximise></input>";
  document.getElementById("window" + appname + "header").innerHTML += "<input type=image src=/Ampersan/assets/icons/svg/fi-rr-minus.svg class=windowactions id=" + appname + "minimise></input>";
  document.getElementById("window" + appname).innerHTML += "<div class=windowframediv id=iframediv" + appname + "></div>";
  document.getElementById("window" + appname).innerHTML += "<iframe class=windowframe src=/Ampersan/Amperdesktop/defaultapps/" + appname + "/src/app.html></iframe>"