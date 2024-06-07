
var vdo = document.getElementById("vdo")
var prgrss=document.getElementById("prog")
var temr=document.getElementById("lapl")
function progressLoop() {
    setInterval(function () {
      prgrss.value = Math.round((vdo.currentTime / vdo.duration) * 100);
      temr.innerHTML = Math.round(vdo.currentTime) + " seconds";
    });
  }
function vdPlay() {
    vdo.play()
    progressLoop()
}

function vdPause(){
    vdo.pause()
}

function setCurTimeStart() { 
    vdo.currentTime=0;
  } 

function setCurTimeMines5() { 
    vdo.currentTime-=5;
  } 

function setCurTimeAdd5() { 
    vdo.currentTime+=5;
  } 

function setCurTimeEnd() { 
    vdo.currentTime=108;
  } 

function muted(){
    vdo.muted=true
}

function VdVolum() {
    var vlu=document.getElementById("rng").value
    vdo.volume=vlu
    
}

function playPack() {
    var vlue=document.getElementById("sped").value
    vdo.playbackRate = vlue;
    
}

function setColor() {
    var r=document.getElementById("red").value
    var g=document.getElementById("green").value
    var b=document.getElementById("blue").value

    var dv=document.getElementById("colr")
    dv.style.backgroundColor="rgb("+r+","+g+","+b+")"
    
}
function rst() {
    var dv=document.getElementById("colr")
    dv.style.backgroundColor=rgb('20','100','50')
}

var x=0;
var y=0 ;
function setdimantion() {
    x += 20
    y += 20
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drwlin() {
    c = document.getElementById("myline");
    ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    
    setInterval(setdimantion())
    

}