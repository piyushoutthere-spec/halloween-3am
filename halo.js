const intro = document.getElementById("intro");
const video = document.getElementById("introvid");

const homepg = document.getElementById("homepg");

const ghostvid = document.getElementById("ghost");

const ghostdialogue = document.getElementById("GHdialogue");

const ghosttext = document.getElementById("GHtext");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

const FS=document.getElementById("FS");

let introF = false;
let GHstep = 0;

const GHlines = [
    {
        text: "Yeloo.. i know your there.",
        options:["Who are you?","what do you want?"]
    },
    {
        text: "Nahahhah not important, why are you here?",
        options: ["why do you want?,exploring,..","I donono i guess"]
    },
    {
        text:"You shouldn't have come here lad",
        options: ["Why not?, scary!","Anything wrong here?"]
    },
    {
        text: "Kinda looks like tonigt treat, you think you can leave?",
        options: ["Yes, there is ntg much here","Ahh wtt okay lemme goo!"]
    },
    {
        text:"Maybe your running out of time lad!",
        options: ["what do you mean?","OK,sTop.."]
    },
    {
        text:"Hahhahah.. you should have left earlier lad!",
        options: ["What are you onto?","whats gonna happen now!?"]
    },
    {
        text:"NOBODY KNOWSS!!",
        options: ["Wha......","..."]
    }
];

// intro to homepage

function finishintro() {
    if (introF) {
        return;
    }

    introF = true;
    intro.style.display = "none";
    homepg.style.display = "flex";

    ghostvid.currentTime = 0;

    ghostvid.play()

    setTimeout(startconvo,
3000);
}

function startconvo() {
    GHstep=0;
    ghostdialogue.style.display ="block";
    showghostline();
}

function showghostline() {
    const line = GHlines[GHstep];

    ghosttext.textContent = line.text;
    option1.textContent = line.options[0];
    option2.textContent = line.options[1];
}

function nextGHline() {
    GHstep++;

    if (GHstep >= GHlines.length) {
        endconvo();
        return;
    }
    showghostline();
}

function endconvo(){
    ghostvid.pause();
    homepg.style.display="none";

    FS.classList.add("active");
}

option1.addEventListener("click",nextGHline);
option2.addEventListener("click",nextGHline);

video.addEventListener("ended",finishintro);