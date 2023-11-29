var min = 0;
var sec = 0;
var count = 0;

var prev_min = 0;
var prev_sec = 0;
var prev_count = 0;

var diff_min = 0;
var diff_sec = 0;
var diff_count = 0;


var timer = false;
const audio = new Audio();
audio.src = "audio/sound_trim.mp3";

function $id(id) {
    return document.getElementById(id);
}

function start() {

      audio.play();
      if (!timer){
          timer = true;
      $id("start").innerHTML = '<i class="far fa-pause-circle"></i> Pause';
          stopwatch();
      }
      else
      {
          timer=false;
          $id("start").innerHTML = '<i class="far fa-play-circle"></i> Start';
      }

    $("start").blur();
}

/*function stop() {
    timer = false

}
*/
function reset() {
    audio.play();
    timer = false;
    $id("start").innerHTML = '<i class="far fa-play-circle"></i> Start';


    min = 0;
    sec = 0;
    count = 0;

    $id("min").innerHTML = "00";
    $id("sec").innerHTML = "00";
    $id("count").innerHTML = "00";
    $id("reset").blur();
}

let timeoutId;
function stopwatch() {
    clearTimeout(timeoutId);

    if (timer == true)
        count = count + 1;

    if (count == 99) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }

    var minString = min;
    var secString = sec;
    var countString = count;

    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }

    $id("min").innerHTML = minString;
    $id("sec").innerHTML = secString;
    $id("count").innerHTML = countString;
    timeoutId = setTimeout("stopwatch()", 10);
}




