setInterval(setSessionTime, 1000);
setInterval(setLocalTime, 1000);
let b = 1000;

function setSessionTime() {
    let item = sessionStorage.getItem("sessiontime")
    let a = parseInt(sessionStorage.getItem("sessiontime"));
    let c = a + b;
    if (item == 'null' || item == 'NaN') {
        console.log('a')
        sessionStorage.setItem("sessiontime", "0")
    } else {
        sessionStorage.setItem("sessiontime", c)
    }
}

function setLocalTime() {
    let item = localStorage.getItem("localtime")
    let a = parseInt(localStorage.getItem("localtime"));
    let c = a + b;
    if (item == 'null' || item == 'NaN') {
        console.log('a')
        localStorage.setItem("localtime", "0")
    } else {
        localStorage.setItem("localtime", c)
    }
}