const data = [
  {
    id: 1,
    name: "new wave kit",
    url: "https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg",
  },
  {
    id: 2,
    name: "synth organ",
    url: "https://static.bandlab.com/soundbanks/previews/synth-organ.ogg",
  },
];

const fillPlaylist = (eventHandler) => {
  const playlist = document.getElementById("playlist");

  const nodeList = data.map((track) => {
    const htmlEl = document.createElement("li");
    const { id, name, url } = track;
    htmlEl.className = "list__item";
    htmlEl.dataset.trackId = id;
    htmlEl.dataset.name = name;
    htmlEl.innerText = name;
    htmlEl.addEventListener("click", (e) => {
      const { trackId, name } = e.target.dataset;
      console.log(e.target.dataset);
      eventHandler(trackId, name);
    });
    return htmlEl;
  });

  playlist.append(...nodeList);
};

export default fillPlaylist;
