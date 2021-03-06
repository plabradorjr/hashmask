import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        className={isPlaying ? "rotateSong" : ""}
        src={currentSong.cover}
        alt=""
      />
      {/* <h2>{currentSong.name}</h2> */}
      <br></br>
      <h3>Hashmask name: Thotiana</h3>
      <br></br>
      <a href="https://opensea.io/assets/0xc2c747e0f7004f9e8817db2ca4997657a7746928/16242" ><button className="library-song">OpenSea</button></a>
    </div>
  );
};

export default Song;
