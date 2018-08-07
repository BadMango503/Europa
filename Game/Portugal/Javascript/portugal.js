document.getElementById("cc").addEventListener("click", myFunction);

//var title = document.getElementById("intro")
 function myFunction() {
        intro.className = "hide";
        box.className = "";
        timer()
}

//Timer
function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
     
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
     
            display.textContent = minutes + ":" + seconds;
     
            if (--timer < 0) {
                timer = duration;
                
            }
        }, 1000);
     }
     
function timer() {
        var fMinutes = 60 / 60,
            display = document.querySelector('#time');
        startTimer(fMinutes, display);
     };