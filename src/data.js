import { v4 as uuidv4 } from "uuid";
import thotiana from './assets/songs/thotiana.mp3';
import hashmask from './assets/covers/hashmask1.png';
import kream from './assets/songs/Kream.mp3';
import roll from './assets/songs/on-a-roll.mp3'

function chillHop() {
  return [
    {
      name: "Thotiana",
      cover: hashmask,
      artist: "Blue Face",
      audio: thotiana,
      color: ["#ec20db", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "On A Roll",
      cover: hashmask,
      artist: "Ashley O",
      audio: roll,
      color: ["#1f2221", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Kream",
      cover: hashmask,
      artist: "Iggy Azalea",
      audio: kream,
      color: ["#b81c89", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    
    
    //ADD MORE HERE
  ];
}

export default chillHop;
