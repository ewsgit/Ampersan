
var desktopbackgroundlocal = 1;

document.getElementById('changedesktopbackground').addEventListener('click', function () {
  desktopbackground = desktopbackgroundlocal;

  if (desktopbackgroundlocal < 10) {
    var desktopbackgroundlocal + 1;
  } else {
    var desktopbackgroundlocal = 1;
  }

}, false);