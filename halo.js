const intro = document.getElementById("intro");
const video = document.getElementById("introvid");

const homepg = document.getElementById("homepg");

const ghostvid = document.getElementById("ghost");

let introF = false;
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

    setTimeout(() => {
        GHdialogue.style.display = "block";
    },3000);
}

video.addEventListener("ended", finishintro);