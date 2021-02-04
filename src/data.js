import { v4 as uuidv4 } from "uuid";
import bootylicious from './assets/songs/bootylicious.mp3';
import hashmask from './assets/covers/hashmask1.png';
import jumpin from './assets/songs/jumpin.mp3';
import losemybreath from './assets/songs/losemybreath.mp3';
import survivor from './assets/songs/survivor.mp3';

function chillHop() {
  return [
    {
      name: "Bootylicious",
      cover: hashmask,
      artist: "Destinys Child",
      audio: bootylicious,
      color: ["#1f2221", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Lose My Breath",
      cover: hashmask,
      artist: "Destinys Child",
      audio: losemybreath,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jumpin Jumpin",
      cover: hashmask,
      artist: "Destinys Child",
      audio: jumpin,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Survivor",
      cover: hashmask,
      artist: "Destinys Child",
      audio: survivor,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
