const intro = document.getElementById("intro");
const video = document.getElementById("introvid");

const homepg = document.getElementById("homepg");

let introF = false;

function finishintro() {
    if (introF) {
        return;
    }

    introF = true;
    intro.style.display = "none";
    homepg.style.display = "flex";
}

video.addEventListener("ended", finishintro);