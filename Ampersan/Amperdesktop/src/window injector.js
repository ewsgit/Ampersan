var appname = "settingsgbapp";
document.getElementById(appname).addEventListener('click', function () {

    var taskbarapp = document.createElement("div");
    taskbarapp.id = "window" + appname;
    taskbarapp.className = "window";
    var taskbarappheader = document.createElement("div");
    taskbarappheader.id = "window" + appname + "Header";
    taskbarappheader.className = "windowheader";
    var taskbartitle = document.createElement("a")
    var windowaction1 = document.createElement("input");
    windowaction1.id = appname + "maximise";
    windowaction1.className = "windowactions";
    var windowaction2 = document.createElement("input");
    windowaction2.id = appname + "close";
    windowaction2.className = "windowactions";
    var iframe = document.createElement("iframe");
    iframe.id = appname + "iframe";
    iframe.className = "windowframe";

    document.getElementById("taskbar").appendChild(taskbarapp)
    document.getElementById("window" + appname).appendChild(taskbarappheader)
    document.getElementById("window" + appname + "header").appendChild(taskbartitle)
    document.getElementById("window" + appname + "header").appendChild(windowaction1)
    document.getElementById("window" + appname + "header").appendChild(windowaction2)
    document.getElementById("window" + appname).appendChild(iframe)

});


document.getElementById("windows").innerHTML += "<p>My new content</p>";