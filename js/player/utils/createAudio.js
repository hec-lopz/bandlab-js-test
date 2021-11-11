const AudioContext = window.AudioContext;
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const volumeControl = document.querySelector("#volume");
volumeControl.addEventListener(
  "input",
  function () {
    gainNode.gain.value = this.value;
  },
  false
);

const createAudio = (btn) => {
  audioCtx.resume();
  const media1 = document.querySelector(`[data-track-id="1"]`);
  const media2 = document.querySelector(`[data-track-id="2"]`);
  const tracks = [media1, media2];
  const track1 = audioCtx.createMediaElementSource(media1);
  const track2 = audioCtx.createMediaElementSource(media2);
  track1.connect(gainNode).connect(audioCtx.destination);
  track2.connect(gainNode).connect(audioCtx.destination);
  let currentlyPlaying;
  return (id) => {
    btn.disabled = false;
    btn.innerText = "Pause";
    if (
      currentlyPlaying === tracks[id - 1] &&
      currentlyPlaying.currentTime < currentlyPlaying.duration
    ) {
      return;
    }
    if (id === undefined) {
      if (currentlyPlaying.paused) {
        currentlyPlaying.play();
        btn.innerText = "Pause";
      } else {
        currentlyPlaying.pause();
        btn.innerText = "Play";
      }

      return;
    }

    currentlyPlaying?.pause();
    currentlyPlaying = tracks[id - 1];
    tracks[id - 1].currentTime = 0;
    tracks[id - 1].play();
  };
};

export default createAudio;
