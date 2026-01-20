const music = document.getElementById("music");

function bukaUndangan() {
document.querySelector(".cover").style.display = "none";
document.getElementById("isi").style.display = "block";
music.play();
}

// kontrol musik
function toggleMusic() {
music.paused ? music.play() : music.pause();
}

// animasi scroll
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
faders.forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 100) {
el.classList.add("show");
}
});
});
