const clock = document.getElementById("clock")

setInterval(function() {
    let d = new Date().toLocaleTimeString();
    clock.innerHTML = d;
} , 1000)