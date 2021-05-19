// Make the DIV element draggable:

//WebBrowser

// change "appname" to the name of the app using the api,
// make sure that there are no duplicate names

dragElement(document.getElementById("window" + "WebBrowser"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

    if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementById("WebBrowser" + "maximise").addEventListener("click", function () {

  (document.getElementById('window' + "WebBrowser").style.width == '30vw' || document.getElementById('window' + "WebBrowser").style.width == '')
    ? document.getElementById('window' + "WebBrowser").style.width = '95vw'
    : document.getElementById('window' + "WebBrowser").style.width = '30vw';

  (document.getElementById('window' + "WebBrowser").style.height == '20vw' || document.getElementById('window' + "WebBrowser").style.height == '')
    ? document.getElementById('window' + "WebBrowser").style.height = '45vw'
    : document.getElementById('window' + "WebBrowser").style.height = '20vw';

}, false)

document.getElementById("WebBrowser").addEventListener('click', function () {

  (document.getElementById('window' + "WebBrowser").style.display == 'none' || document.getElementById('window' + "WebBrowser").style.display == '')
    ? document.getElementById('window' + "WebBrowser").style.display = 'block'
    : document.getElementById('window' + "WebBrowser").style.display = 'none';

}, false);

document.getElementById("WebBrowser" + "close").addEventListener('click', function () {

  (document.getElementById('window' + "WebBrowser").style.display == 'none' || document.getElementById('window' + "WebBrowser").style.display == '')
    ? document.getElementById('window' + "WebBrowser").style.display = 'none'
    : document.getElementById('window' + "WebBrowser").style.display = 'none';

  (document.getElementById('WebBrowser' + "tb").style.display == 'none' || document.getElementById('WebBrowser' + "tb").style.display == '')
    ? document.getElementById('WebBrowser' + "tb").style.display = 'block'
    : document.getElementById('WebBrowser' + "tb").style.display = 'none';

}, false);

document.getElementById("WebBrowser" + "minimise").addEventListener('click', function () {

  (document.getElementById('window' + "WebBrowser").style.display == 'none' || document.getElementById('window' + "WebBrowser").style.display == '')
    ? document.getElementById('window' + "WebBrowser").style.display = 'none'
    : document.getElementById('window' + "WebBrowser").style.display = 'none';

}, false);

document.getElementById("WebBrowser" + "fullscreen").addEventListener('click', function () {

  (document.getElementById('window' + "WebBrowser").style.width == '30vw' || document.getElementById('window' + "WebBrowser").style.width == '')
    ? document.getElementById('window' + "WebBrowser").style.width = '100vw'
    : document.getElementById('window' + "WebBrowser").style.width = '30vw';

  (document.getElementById('window' + "WebBrowser").style.height == '20vw' || document.getElementById('window' + "WebBrowser").style.height == '')
    ? document.getElementById('window' + "WebBrowser").style.height = '100vw'
    : document.getElementById('window' + "WebBrowser").style.height = '20vw';

  (document.getElementById('window' + "WebBrowser").style.top == '0' || document.getElementById('window' + "WebBrowser").style.top == '')
    ? document.getElementById('window' + "WebBrowser").style.top = '0'
    : document.getElementById('window' + "WebBrowser").style.top = '0';

  (document.getElementById('window' + "WebBrowser").style.left == '0' || document.getElementById('window' + "WebBrowser").style.left == '')
    ? document.getElementById('window' + "WebBrowser").style.left = '0'
    : document.getElementById('window' + "WebBrowser").style.left = '0';

}, false);