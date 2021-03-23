// console.log("hello");




let audio = new Audio();
audio.src = ('./sounds/Main-site-track.mp3');


function siteMusic(){
audio.volume = 0.2;
audio.loop = true;
audio.play();
}
function pauseAudio(){
  audio.pause();
}
function playAudio(){
  audio.play();
}
window.addEventListener('load', (event) => {
  siteMusic();
});


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


function loadingAnimation(){
tl.to(".square", {transform: 'scale(0)', duration: 1, delay:1});
tl.to(".square", {transform: 'scale(1)', duration: 1});
tl.to(".circle", {transform: 'scale(0)',duration: 1}, "-=0.1");
tl.to(".square", {transform: 'scale(0)', duration: 1});
tl.to(".circle", {transform: 'scale(1)',duration: 1});
tl.to(".square", {transform: 'scale(1)', duration: 1}, "-=1");
tl.to(".circle", {transform: 'scale(0)',duration: 1});
tl.to(".square", {transform: 'scale(0)', duration: 1}, "-=1");
tl.to("#loadingScreen", {display:'none'});
tl.to(".homeContentContainer",{display:'block'});
tl.to(".nav-header",{transform:'translateX(0px)'});
tl.to(".homeRightContainer h1",{transform: 'translateY(0px)',duration: 0.5});
}




// tl.to(".square", {transform: 'scale(0)', duration: 1, delay:1});
// tl.to(".square", {transform: 'scale(1)', duration: 1});
// tl.to(".circle", {transform: 'scale(0)',duration: 1}, "-=0.1");
// tl.to(".square", {transform: 'scale(0)', duration: 1});
// tl.to(".circle", {transform: 'scale(1)',duration: 1});
// tl.to(".square", {transform: 'scale(1)', duration: 1}, "-=1");
// tl.to(".circle", {transform: 'scale(0)',duration: 1});
// tl.to(".square", {transform: 'scale(0)', duration: 1}, "-=1");
// tl.to("#loadingScreen", {display:'none'});
// tl.to(".homeContentContainer",{display:'block'});
// tl.to(".nav-header",{transform:'translateX(0px)'});
// tl.to(".homeRightContainer h1",{transform: 'translateY(0px)',duration: 0.5});

const nav = document.querySelector(".nav-header");
const burger = document.querySelector('.burger');
const viewWorks = document.querySelector('#viewWorks');
const worksInfo = document.querySelector('.projectInfoMaster');
const birdProject = document.querySelector('#birdProject');

function navToggle(e){

    if (!e.target.classList.contains("active")){
        e.target.classList.add("active");
        gsap.to('.line1', 0.5, {rotate: "45", y: 4, background: "black" });
        gsap.to('.line2', 0.5, {rotate: "-45", y: -4, background: "black" });
        gsap.to('.nav-header', {borderRight:'2px solid #1a1a18' });
        gsap.to('.nav-header', {borderRight:'2px solid #1a1a18' });
        gsap.to('.nav-header h3',1, {color: "#1a1a18" });
        gsap.to('.nav-bar',1, {clipPath: "circle(3500px at -20% -100%)" });
        document.body.classList.add("hide");
    }else{
        e.target.classList.remove("active");
        gsap.to('.line1', 0.5, {rotate: "0", y: 0, background: "#f9f9f9" });
        gsap.to('.line2', 0.5, {rotate: "0", y: 0, background: "#f9f9f9" });
        gsap.to('.nav-header', {borderRight:'2px solid #f9f9f9' });
        gsap.to('.nav-header h3',1, {color: "#f9f9f9" });
        gsap.to('.nav-bar',1, {clipPath: "circle(50px at -20% -100%)" }); 
        document.body.classList.remove("hide");
    }
}

$("#w").click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: '+=1080'}, 1080);
});

burger.addEventListener("click", navToggle);
viewWorks.addEventListener("click", navToggle);


function showBirdProject(){
    if ($( birdProject ).click){
        worksInfo.style.display = 'none';
        $('#birdProjectPage').show();
        $('#birdProjectPage').css('display', 'flex');
        
        
    } 
};
function showSoundIllustration(){
    if ($('#soundIllustrationProject').click) {
        worksInfo.style.display = 'none';
        $('.soundIllustrationMaster').show();
        $('.soundIllustrationMaster').css('display', 'flex');
        pauseAudio();
    }
}
function showDrawingProject(){
    if ($('#drawinProject').click) {
        worksInfo.style.display = 'none';
        $('.drawingMasterContainer').show();
        $('.drawingMasterContainer').css('display', 'flex');
    }
}
function showBeatMakerProject(){
    if ($('#beatMakerProjectPage').click) {
        worksInfo.style.display = 'none';
        $('.beatMakerMaster').show();
        $('.beatMakerMaster').css('display', 'flex');
        pauseAudio();
    }
}
function testHide(){
    $('#birdProjectPage').hide();
    $('.soundIllustrationMaster').hide();
    $('.drawingMasterContainer').hide();
    $('.beatMakerMaster').hide();
    worksInfo.style.display = 'block';
    playAudio();
  }
  function triggerMusic(){
    playAudio();
  }




// sound illustration JavaScript



function master() {
    function padsDown(key){
        let colours= ['#FDE5B9','#B5EFE0','#B0D9F3','#D8B4E2','#FF9BC5','#FF9798'];
        let random_color = colours[Math.floor(Math.random() * colours.length)];
        const beatPad = document.querySelectorAll(".illustrationPad");
        const beatPadText = document.querySelectorAll(".illustrationPad p");
        console.log(beatPad);
        
        if (key.keyCode == "68") {
            beatPad[0].style.boxShadow="inset 2px 2px 10px rgba(0,0,0,.08),-2px -2px 10px rgba(255,255,255,1)";
            beatPadText[0].style.opacity="0.2";
            let audio = new Audio('sounds/kick-808.wav');
            audio.play();
    
            $(".bear, .glass, .basketball").css("fill",random_color);
        
        }
        if (key.keyCode == "70") {
            beatPad[1].style.boxShadow="inset 2px 2px 10px rgba(0,0,0,.08),-2px -2px 10px rgba(255,255,255,1)";
            beatPadText[1].style.opacity="0.2";
            let audio = new Audio('sounds/hihat-808.wav');
            audio.play();
    
            $(".bottomLeftblob, .legoLegArm, .rectangleCenterRight").css("fill",random_color);
        }
        if (key.keyCode == "71") {
            beatPad[2].style.boxShadow="inset 2px 2px 10px rgba(0,0,0,.08),-2px -2px 10px rgba(255,255,255,1)";
            beatPadText[2].style.opacity="0.2";
            let audio = new Audio('sounds/snare-808.wav');
            audio.play();
            $(".topRectangle, .rightBlob, .centerTri").css("fill",random_color);
        }
        if (key.keyCode == "72") {
            beatPad[3].style.boxShadow="inset 2px 2px 10px rgba(0,0,0,.08),-2px -2px 10px rgba(255,255,255,1)";
            beatPadText[3].style.opacity="0.2";
            let audio = new Audio('sounds/snare-vinyl02.wav');
            audio.play();
    
            $(".mountian, .legoHeadHandFeet, .halfEgg").css("fill",random_color);
        }
        if (key.keyCode == "74") {
            beatPad[4].style.boxShadow="inset 2px 2px 10px rgba(0,0,0,.08),-2px -2px 10px rgba(255,255,255,1)";
            beatPadText[4].style.opacity="0.2";
            let audio = new Audio('sounds/kick-classic.wav');
            audio.play();
            $(".isoSquare, .topBlob, .rectangleLeft, .isoBlockTwo").css("fill",random_color);
        }
        
    }
    
    
    function padsUp(key){
        const beatPad = document.querySelectorAll(".illustrationPad");
        const beatPadText = document.querySelectorAll(".illustrationPad p");
    
        if (key.keyCode == "68") {
            beatPad[0].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1)";
            beatPadText[0].style.opacity="0.3";
        }
        if (key.keyCode == "70") {
            beatPad[1].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1)";
            beatPadText[1].style.opacity="0.3";
        }
        if (key.keyCode == "71") {
            beatPad[2].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1)";
            beatPadText[2].style.opacity="0.3";
        }
        if (key.keyCode == "72") {
            beatPad[3].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1)";
            beatPadText[3].style.opacity="0.3";
        }
        if (key.keyCode == "74") {
            beatPad[4].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1)";
            beatPadText[4].style.opacity="0.3";
        }
    
    }

    
    window.addEventListener("keydown",padsDown,false);
    window.addEventListener("keyup",padsUp,false);
    
}

master();




// end of sound illusttration Javascript


// start of birds Javascript

let birds = 
    {
        name: ["tui", "korimako (bell bird)","hihi (stitch bird)","kokako","kereru"],
        thumbnail: ["img/tui.png","img/bellBird.png","img/stitchBird.png","img/kokako.png","img/kereru.png"],
        audio:["sounds/bird-calls/Tui.mp3","sounds/bird-calls/Korimako.mp3","sounds/bird-calls/Hihi_stichbird.mp3","sounds/bird-calls/Kokako.mp3","sounds/bird-calls/Kereru.mp3"]
    };
   console.log(birds.thumbnail);
let number = 0;
$('#next').click(function(){

    number += 1;
    if (number > 4){
        number = 0
    } else{
    }
    console.log(number);
    document.getElementById("birdName").innerHTML = birds.name[number];
    document.getElementById("testing").src = birds.thumbnail[number];
});
$('#prev').click(function(){

    number -= 1;
    if (number < 0){
        number = 4
    } else{
    }
    console.log(number);
    document.getElementById("birdName").innerHTML = birds.name[number];
    document.getElementById("testing").src = birds.thumbnail[number];
});

let albumAudio = new Audio();

function mouseOver(){
    // let albumAudio = new Audio('sounds/digitalHaircut.mp3');
    albumAudio.src = birds.audio[number];
    albumAudio.play();
}
function mouseOut(){
    albumAudio.pause();
}

console.log(number);
document.getElementById("birdName").innerHTML = birds.name[number];
document.getElementById("testing").src = birds.thumbnail[number];
document.getElementById("testing").addEventListener("mouseover", mouseOver);
document.getElementById("testing").addEventListener("mouseout", mouseOut);


// end of birds javascript

// start of drawing script


window.addEventListener('load',() =>{


    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    canvas.width  = 2000;
    canvas.height = 2000;
    ctx.strokeStyle = "#1a1a18";
    ctx.lineWidth = 10;
     
    let painting = false;
   

   

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting= false;
        ctx.beginPath();
    }
    function draw(e){

        let rect = canvas.getBoundingClientRect();

        if(!painting) return;
        // ctx.lineWidth = 10;
        ctx.lineCap = "round";
        



        ctx.lineTo( (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width, 
            (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height) ;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo( (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width, 
        (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height);


        var clearButton = document.getElementById('clear');
            clearButton.addEventListener('click', function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = '#1a1a18';
        });

        var colors = document.getElementsByClassName('colors')[0];
        colors.addEventListener('click', function(event) {
        ctx.strokeStyle = event.target.value || '#1a1a18';
        });
        

       

    }

     var brush = document.querySelector('#brushStroke');

     brush.addEventListener('change', function() {
        ctx.lineWidth = brush.value || 10;
     });




    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

});


// end of drawing script


// beat maker script

class DrumKit {
    constructor() {
      this.pads = document.querySelectorAll(".pad");
      this.playBtn = document.querySelector(".play");
  
      this.currentKick = "./sounds/Kick/808-Kick.wav";
      this.currentSnare = "./sounds/Snare/808-Snare.wav";
      this.currentHihatOpen = "./sounds/Hat-open/808-Open-hihat.wav";
      this.currentHihatClosed = "./sounds/Hat-closed/808-Closed-hihat.wav";
      this.currentClap = "./sounds/Clap/808-clap.wav";
      this.currentSampleOne = "./sounds/SampleOne/Piano-Loop-Tahi-FMaj7-82-BPM.mp3";
      
  
      this.kickAudio = document.querySelector(".kick-sound");
      this.snareAudio = document.querySelector(".snare-sound");
      this.hihatOpenAudio = document.querySelector(".hihatOpen-sound");
      this.hihatClosedAudio = document.querySelector(".hihatClosed-sound");
      this.clapAudio = document.querySelector(".clap-sound");
      this.sampleOneAudio = document.querySelector(".sampleOne-sound");
     
  
      this.index = 0;
      this.bpm = 150;
      this.isPlaying = null;
      this.selects = document.querySelectorAll("select");
      this.muteBtns = document.querySelectorAll(".mute");
      this.tempoSlider = document.querySelector(".tempo-slider");
    }
  
    
    activePad() {
      this.classList.toggle("active");
    }
    repeat() {
      let step = this.index % 16;
      const activeBars = document.querySelectorAll(`.b${step}`);
      //Loop over the pads
      activeBars.forEach(bar => {
        bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
        if (bar.classList.contains("active")) {
          if (bar.classList.contains("kick-pad")) {
            this.kickAudio.currentTime = 0;
            this.kickAudio.play();
          }
          if (bar.classList.contains("snare-pad")) {
            this.snareAudio.currentTime = 0;
            this.snareAudio.play();
          }
          if (bar.classList.contains("hihatOpen-pad")) {
            this.hihatOpenAudio.currentTime = 0;
            this.hihatOpenAudio.play();
          }
          if (bar.classList.contains("hihatClosed-pad")) {
            this.hihatClosedAudio.currentTime = 0;
            this.hihatClosedAudio.play();
          }
  
          if (bar.classList.contains("clap-pad")) {
            this.clapAudio.currentTime = 0;
            this.clapAudio.play();
          }
          if (bar.classList.contains("sampleOne-pad")) {
            this.sampleOneAudio.currentTime = 0;
            this.sampleOneAudio.play();
          }
 
       
         
  
        }
      });
      this.index++;
    }
    start() {
      const interval = (60 / this.bpm) * 1000;
      //Check if it's playing
  
      if (this.isPlaying) {
        //Clear the interval
        clearInterval(this.isPlaying);
        console.log(this.isPlaying);
        this.isPlaying = null;
      } else {
        this.isPlaying = setInterval(() => {
          this.repeat();
        }, interval);
      }
    }
    updateBtn() {
      //NULL
  
      if (!this.isPlaying) {
        this.playBtn.innerText = "Stop";
        this.playBtn.classList.add("active");
      } else {
        this.playBtn.innerText = "Play";
        this.playBtn.classList.remove("active");
      }
    }
    changeSound(e) {
      const selectionName = e.target.name;
      const selectionValue = e.target.value;
      switch (selectionName) {
        case "kick-select":
          this.kickAudio.src = selectionValue;
          break;
        case "snare-select":
          this.snareAudio.src = selectionValue;
          break;
        case "hihatOpen-select":
          this.hihatOpenAudio.src = selectionValue;
          break;
          case "hihatClosed-select":
          this.hihatClosedAudio.src = selectionValue;
          break;
          case "clap-select":
            this.clapAudio.src = selectionValue;
            break;
          case "sampleOne-select":
              this.sampleOneAudio.src = selectionValue;
            break;

      }
    }
    mute(e) {
      const muteIndex = e.target.getAttribute("data-track");
      e.target.classList.toggle("active");
      if (e.target.classList.contains("active")) {
        switch (muteIndex) {
          case "0":
            this.kickAudio.volume = 0;
            break;

          case "1":
            this.snareAudio.volume = 0;
            break;

          case "2":
            this.hihatOpenAudio.volume = 0;
            break;

            case "3":
            this.hihatClosedAudio.volume = 0;
            break;

            case "4":
            this.clapAudio.volume = 0;
            break;

            case "5":
            this.sampleOneAudio.volume = 0;
            break; 
        }
      } else {
        switch (muteIndex) {
          case "0":
            this.kickAudio.volume = 1;
            break;
          case "1":
            this.snareAudio.volume = 1;
            break;
          case "2":
            this.hihatOpenAudio.volume = 1;
            break;
            case "3":
              this.hihatClosedAudio.volume = 1;
              break;
            case "4":
            this.clapAudio.volume = 1;
            break;
            case"5":
            this.sampleOneAudio.volume = 1;
            break;     
        }
      }
    }
    changeTempo(e) {
      const tempoText = document.querySelector(".tempo-nr");
  
      tempoText.innerText = e.target.value;
    }
    updateTempo(e) {
      this.bpm = e.target.value;
      clearInterval(this.isPlaying);
      this.isPlaying = null;
      const playBtn = document.querySelector(".play");
      if (playBtn.classList.contains("active")) {
        this.start();
      }
    }
  }
  
  const drumKit = new DrumKit();
  
  //Event Listeners
  
  drumKit.pads.forEach(pad => {
    pad.addEventListener("click", drumKit.activePad);
    pad.addEventListener("animationend", function() {
      this.style.animation = "";
    });
  });
  
  drumKit.playBtn.addEventListener("click", function() {
    drumKit.updateBtn();
    drumKit.start();
  });
  
  drumKit.selects.forEach(select => {
    select.addEventListener("change", function(e) {
      drumKit.changeSound(e);
    });
  });
  drumKit.muteBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      drumKit.mute(e);
    });
  });
  
  drumKit.tempoSlider.addEventListener("input", function(e) {
    drumKit.changeTempo(e);
  });
  drumKit.tempoSlider.addEventListener("change", function(e) {
    drumKit.updateTempo(e);
  });
  


 
// end of beat maker script
