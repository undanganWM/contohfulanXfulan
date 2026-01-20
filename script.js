const music = document.getElementById("music");

function bukaUndangan() {
// hilangkan cover
document.querySelector(".cover").style.display = "none";

// tampilkan isi
const isi = document.getElementById("isi");
isi.style.display = "block";

// PAKSA semua fade tampil (anti blank)
document.querySelectorAll(".fade").forEach(el => {
el.classList.add("show");
});

// play musik
music.play();
}

// kontrol musik
function toggleMusic() {
if (music.paused) {
music.play();
} else {
music.pause();
}
}

// animasi scroll (opsional, tetap halus)
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
faders.forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 80) {
el.classList.add("show");
}
});
});

/* NAMA TAMU DARI URL */
const params = new URLSearchParams(window.location.search);
let namaTamu = params.get("to");

if (namaTamu) {
  namaTamu = namaTamu.replace(/\+/g, " ");
  document.getElementById("tamu").innerText =
    "Kepada Yth. " + namaTamu;
}
