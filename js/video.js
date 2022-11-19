// Add js here.
var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;
vid.load();


function playvideo(vid) {
    vid.play()
}

function puasevideo(vid) {
    vid.pause()
}


function speedup(vid) {
  if (vid.playbackRate < 2) {
        vid.playbackRate += 0.5;
    }
    else {
        alert("Video is at fastest speed!" );
    }
}
//
function speeddown(vid) {
  if (vid.playbackRate >= 1) {
        vid.playbackRate -= 0.5;
    }
    else {
        alert("Video is at slowest speed!" );
    }
}

function skip(vid) {
    vid.currentTime += 15;
    if (vid.currentTime == vid.duration) {
        vid.load();
    }
};

function mute(vid) {
  if (vid.muted == false) {
        vid.muted = true;
        muteButton.textContent = 'Unmute';
        tempVolume = slider.value;
        slider.value = 0;
        output.innerHTML = slider.value;
    }
    else {
        vid.muted = false;
        muteButton.textContent = 'Mute';
        slider.value = tempVolume;
        output.innerHTML = slider.value;
    }
}

//
//
var playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  var vid = document.getElementById("videoplayer");
  playvideo(vid);
});


var puaseButton = document.getElementById("pause");
puaseButton.addEventListener("click", function() {
  var vid = document.getElementById("videoplayer");
  puasevideo(vid);
});

var slowButton = document.getElementById("slower");
slowButton.addEventListener("click", function() {
  var vid = document.getElementById("videoplayer");
  speeddown(vid);
});

var quickButton = document.getElementById("faster");
quickButton.addEventListener("click", function() {
  var vid = document.getElementById("videoplayer");
  speedup(vid);
});

var skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function() {
  var vid = document.getElementById("videoplayer");
  skip(vid);
});

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
  mute(vid);
});

var slider = document.getElementById("slider");
var volum_output = document.getElementById("volume");
volum_output.innerHTML = slider.value;
slider.oninput = function() {
    volum_output.innerHTML = this.value+ "%";
    volum_output.volume = this.value/100;
};

//
// var volumeButton = document.getElementById("volume");
// volumeButton.addEventListener("click", function() {
//   var vid = document.getElementById("videoplayer");
//   mute(vid);
//   document.getElementById("mute").innerHTML = "Unmute";
// });
