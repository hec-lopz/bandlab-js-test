import createAudio from "./utils/createAudio.js";
import fillPlaylist from "./utils/fillPlaylist.js";

const playBtn = document.getElementById("playBtn");
playBtn.disabled = true;
const playAudio = createAudio(playBtn);
playBtn.addEventListener("click", () => playAudio());

window.onload = () => fillPlaylist(playAudio);
