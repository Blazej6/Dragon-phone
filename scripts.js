var x = document.getElementById("playing-currently");
var y = document.getElementById("playing-station");
var z = ["RedFlame FM", "BlackWing FM", "MagicThunder FM", "UndeadFrost FM", "WaterFury FM"];

var a = document.getElementById("audio-controls");
var b = document.getElementById("audio-controls2");
var c = document.getElementById("audio-controls3");
var d = document.getElementById("audio-controls4");
var e = document.getElementById("audio-controls5");

cssStringShow = "opacity: 1; height: 150px; animation: fadeIn ease-out .8s;"
cssStringHide = "opacity: 0; height: 0;"
cssSmoothHide = "opacity: 0; height: 0; animation: fadeOut ease-out .8s;"

currentlyPlayingShow = "animation: fadeIn ease-out .8s; opacity: 1;"
currentlyPlayingHide = "animation: fadeOut ease-out .8s; opacity: 0;"

var livestreamUrl="http://gr-relay-4.gaduradio.pl/19";
var livestreamUrl2="http://stream3.nadaje.com:9116/radiokrakow";
var livestreamUrl3="http://stream-dc1.radioparadise.com/mp3-192";
var livestreamUrl4="http://gr-relay-4.gaduradio.pl/13";
var livestreamUrl5=" http://gr-relay-4.gaduradio.pl/25";

var Radio = {  
  play: function play(livestreamUrl) {
    this.audio = new Audio(livestreamUrl);
    this.audio.volume = 0.3;
    this.audio.play();
  },
  pause: function pause() {
    this.audio.pause();  
  }
};
var Radio2 = {  
  play: function play(livestreamUrl2) {
    this.audio = new Audio(livestreamUrl2);
    this.audio.volume = 0.3;
    this.audio.play();
  },
  pause: function pause() {
    this.audio.pause();  
  }
};

var Radio3 = {  
  play: function play(livestreamUrl3) {
    this.audio = new Audio(livestreamUrl3);
    this.audio.volume = 0.3;
    this.audio.play();
  },
  pause: function pause() {
    this.audio.pause();  
  }
};

var Radio4 = {  
  play: function play(livestreamUrl4) {
    this.audio = new Audio(livestreamUrl4);
    this.audio.volume = 0.3;
    this.audio.play();
  },
  pause: function pause() {
    this.audio.pause();  
  }
};

var Radio5 = {  
  play: function play(livestreamUrl5) {
    this.audio = new Audio(livestreamUrl5);
    this.audio.volume = 0.3;
    this.audio.play();
  },
  pause: function pause() {
    this.audio.pause();  
  }
};

function myFunction() {
    if (y.innerHTML === "" || y.innerHTML != z[0]) {
        x.innerHTML = "CURRENTLY PLAYING";
        y.innerHTML = "RedFlame FM";
        
        a.style.cssText = cssStringShow;
        b.style.cssText = cssStringHide;
        c.style.cssText = cssStringHide;
        d.style.cssText = cssStringHide;
        e.style.cssText = cssStringHide;
        Radio.play(livestreamUrl);
    } else if (x.innerHTML === "CURRENTLY PLAYING"){
        x.innerHTML = "";
        y.innerHTML = "";
        a.style.cssText = cssSmoothHide;
        Radio.pause(livestreamUrl);
    }
}
function myFunction2() {
    if (y.innerHTML === "" || y.innerHTML != z[1]) {
        x.innerHTML = "CURRENTLY PLAYING";
        y.innerHTML = "BlackWing FM";
      
        a.style.cssText = cssStringHide;
        b.style.cssText = cssStringShow;
        c.style.cssText = cssStringHide;
        d.style.cssText = cssStringHide;
        e.style.cssText = cssStringHide;
      
        Radio2.play(livestreamUrl2);
    } else if (x.innerHTML === "CURRENTLY PLAYING"){
        x.innerHTML = "";
        y.innerHTML = "";
        b.style.cssText = cssSmoothHide;
        Radio2.pause(livestreamUrl2);
    }
}
function myFunction3() {
    if (y.innerHTML === "" || y.innerHTML != z[2]) {
        x.innerHTML = "CURRENTLY PLAYING";
        y.innerHTML = "MagicThunder FM";
        a.style.cssText = cssStringHide;
        b.style.cssText = cssStringHide;
        c.style.cssText = cssStringShow;
        d.style.cssText = cssStringHide;
        e.style.cssText = cssStringHide;
      
        Radio3.play(livestreamUrl3);
    } else if (x.innerHTML === "CURRENTLY PLAYING"){
        x.innerHTML = "";
        y.innerHTML = "";
        c.style.cssText = cssSmoothHide;
        Radio3.pause(livestreamUrl3);
    }
}
function myFunction4() {
    if (y.innerHTML === "" || y.innerHTML != z[3]) {
        x.innerHTML = "CURRENTLY PLAYING";
        y.innerHTML = "UndeadFrost FM";
        a.style.cssText = cssStringHide;
        b.style.cssText = cssStringHide;
        c.style.cssText = cssStringHide;
        d.style.cssText = cssStringShow;
        e.style.cssText = cssStringHide;
      
        Radio4.play(livestreamUrl4);
    } else if (x.innerHTML === "CURRENTLY PLAYING"){
        x.innerHTML = "";
        y.innerHTML = "";
        d.style.cssText = cssSmoothHide;
        Radio4.pause(livestreamUrl4);
    }
}
function myFunction5() {
    if (y.innerHTML === "" || y.innerHTML != z[4]) {
        x.innerHTML = "CURRENTLY PLAYING";
        y.innerHTML = "WaterFury FM";
        a.style.cssText = cssStringHide;
        b.style.cssText = cssStringHide;
        c.style.cssText = cssStringHide;
        d.style.cssText = cssStringHide;
        e.style.cssText = cssStringShow;
        Radio5.play(livestreamUrl5);
    } else if (x.innerHTML === "CURRENTLY PLAYING"){
        x.innerHTML = "";
        y.innerHTML = "";
        e.style.cssText = cssSmoothHide;
        Radio5.pause(livestreamUrl5);
    }
}

document.getElementById("RedFlame").addEventListener("click", smashTheRadio)
document.getElementById("BlackWing").addEventListener("click", turndownTheRadio)
document.getElementById("MagicThunder").addEventListener("click", destroyTheRadio)
document.getElementById("UndeadFrost").addEventListener("click", anihilateTheRadio)
document.getElementById("WaterFury").addEventListener("click", makeTheRadioNeverExist)


function smashTheRadio() {
    Radio2.pause(livestreamUrl2);
    Radio3.pause(livestreamUrl3);
    Radio4.pause(livestreamUrl4);
    Radio5.pause(livestreamUrl5);
}
function turndownTheRadio() {
    Radio.pause(livestreamUrl);
    Radio3.pause(livestreamUrl3);
    Radio4.pause(livestreamUrl4);
    Radio5.pause(livestreamUrl5);
} 
function destroyTheRadio() {
    Radio.pause(livestreamUrl);
    Radio2.pause(livestreamUrl2);
    Radio4.pause(livestreamUrl4);
    Radio5.pause(livestreamUrl5);
} 
function anihilateTheRadio() {
    Radio.pause(livestreamUrl);
    Radio2.pause(livestreamUrl2);
    Radio3.pause(livestreamUrl3);
    Radio5.pause(livestreamUrl5);
} 
function makeTheRadioNeverExist() {
    Radio.pause(livestreamUrl);
    Radio2.pause(livestreamUrl2);
    Radio3.pause(livestreamUrl3);
    Radio4.pause(livestreamUrl4);
} 

document.getElementById("lower-volume").addEventListener("click", lowerVolume)
document.getElementById("increase-volume").addEventListener("click", increaseVolume)
document.getElementById("lower-volume2").addEventListener("click", lowerVolume2)
document.getElementById("increase-volume2").addEventListener("click", increaseVolume2)
document.getElementById("lower-volume3").addEventListener("click", lowerVolume3)
document.getElementById("increase-volume3").addEventListener("click", increaseVolume3)
document.getElementById("lower-volume4").addEventListener("click", lowerVolume4)
document.getElementById("increase-volume4").addEventListener("click", increaseVolume4)
document.getElementById("lower-volume5").addEventListener("click", lowerVolume5)
document.getElementById("increase-volume5").addEventListener("click", increaseVolume5)

function lowerVolume() { 
  Radio.audio.volume = Radio.audio.volume - 0.03;
}
function increaseVolume() {
  Radio.audio.volume = Radio.audio.volume + 0.03;
}
function lowerVolume2() { 
  Radio2.audio.volume = Radio2.audio.volume - 0.03;
}
function increaseVolume2() {
  Radio2.audio.volume = Radio2.audio.volume + 0.03;
}
function lowerVolume3() { 
  Radio3.audio.volume = Radio3.audio.volume - 0.03;
}
function increaseVolume3() {
  Radio3.audio.volume = Radio3.audio.volume + 0.03;
}
function lowerVolume4() { 
  Radio4.audio.volume = Radio4.audio.volume - 0.03;
}
function increaseVolume4() {
  Radio4.audio.volume = Radio4.audio.volume + 0.03;
}
function lowerVolume5() { 
  Radio5.audio.volume = Radio5.audio.volume - 0.03;
}
function increaseVolume5() {
  Radio5.audio.volume = Radio5.audio.volume + 0.03;
}





  
