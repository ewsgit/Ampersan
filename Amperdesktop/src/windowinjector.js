function windowapi() {

	const windowsdiv = document.body
	var appname = "Settings"

	windowsdiv.innerHTML += `
  <div class=window id=window${appname}>
		<div class=windowheader id=window${appname}header>
			<a>${appname}</a>
			<input type=image src=/assets/icons/svg/fi-rr-cross.svg class=windowactions id=${appname}close>
			<input type=image src=/assets/icons/svg/fi-rr-square.svg class=windowactions id=${appname}maximise>
			<input type=image src=/assets/icons/svg/fi-rr-minus.svg class=windowactions id=${appname}minimise>
			<input type=image src=/assets/icons/svg/fi-rr-resources.svg class=windowactions id=${appname}fullscreen>
		</div>
			<div class=windowframediv>
				<iframe style=z-index: 8 id=${appname}display class=windowframe src=/Amperdesktop/defaultapps/${appname}/src/app.html frameborder=0></iframe>
			</div>
  </div>

	<script src=/Amperdesktop/defaultapps/${appname}/window_api.js></script>
	<link rel=stylesheet href=/Amperdesktop/defaultapps/${appname}/app.css>
`
}

windowapi()