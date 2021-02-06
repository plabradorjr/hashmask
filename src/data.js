import { v4 as uuidv4 } from "uuid";
import thotiana from './assets/songs/thotiana.mp3';
import hashmask from './assets/covers/hashmask1.png';

function chillHop() {
  return [
    {
      name: "Thotiana",
      cover: hashmask,
      artist: "Blue Face",
      audio: thotiana,
      color: ["#1f2221", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    
    //ADD MORE HERE
  ];
}

export default chillHop;
