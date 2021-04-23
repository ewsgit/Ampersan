// Make the DIV element draggable:

//Kahoot

// change "appname" to the name of the app using the api,
// make sure that there are no duplicate names

dragElement(document.getElementById("window" + "kahoot"));

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

document.getElementById("kahoot" + "maximise").addEventListener("click", function () {

  (document.getElementById('window' + "kahoot").style.width == '30vw' || document.getElementById('window' + "kahoot").style.width == '')
    ? document.getElementById('window' + "kahoot").style.width = '95vw'
    : document.getElementById('window' + "kahoot").style.width = '30vw';

  (document.getElementById('window' + "kahoot").style.height == '20vw' || document.getElementById('window' + "kahoot").style.height == '')
    ? document.getElementById('window' + "kahoot").style.height = '45vw'
    : document.getElementById('window' + "kahoot").style.height = '20vw';

}, false)

document.getElementById("kahoot").addEventListener('click', function () {

  (document.getElementById('window' + "kahoot").style.display == 'none' || document.getElementById('window' + "kahoot").style.display == '')
    ? document.getElementById('window' + "kahoot").style.display = 'block'
    : document.getElementById('window' + "kahoot").style.display = 'none';

}, false);

document.getElementById("kahoot" + "close").addEventListener('click', function () {

  (document.getElementById('window' + "kahoot").style.display == 'none' || document.getElementById('window' + "kahoot").style.display == '')
    ? document.getElementById('window' + "kahoot").style.display = 'none'
    : document.getElementById('window' + "kahoot").style.display = 'none';

}, false);