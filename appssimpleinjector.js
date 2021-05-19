function installapps(appname) {
	document.querySelector(".cards").innerHTML += `
  <div id=${appname}card class=card>
    <img draggable=false (dragstart)=false; src=assets/icons/${appname}.png>
    <div class=lowercard>
      <h2>${appname}</h2>
    </div>
  </div>`
}