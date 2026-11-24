// All tracks are from Pixabay (https://pixabay.com/music/) under the Pixabay Content License.
// Files live in /public/music and /public/covers so nothing depends on an outside host.
import { v4 as uuidv4 } from "uuid";

function songs() {
  return [
    {
      name: "Slow Morning",
      artist: "Marek Zielinski",
      cover: "/covers/slow-morning.svg",
      audio: "/music/slow-morning.mp3",
      color: ["#F2A65A", "#7A4E9C"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Rain on Glass",
      artist: "Alex Morgan",
      cover: "/covers/rain-on-glass.svg",
      audio: "/music/rain-on-glass.mp3",
      color: ["#4F7CAC", "#1E2F4F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Late Table",
      artist: "Alex Morgan",
      cover: "/covers/late-table.svg",
      audio: "/music/late-table.mp3",
      color: ["#C9864A", "#5A2A27"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Night Signal",
      artist: "Yevhen Astafiev",
      cover: "/covers/night-signal.svg",
      audio: "/music/night-signal.mp3",
      color: ["#3BB2A0", "#14213D"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songs;
