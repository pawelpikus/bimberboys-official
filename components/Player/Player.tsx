import React, { useState } from "react";
import { PlaylistContext, songs } from "../../context/playlistContext";
import Controls from "./Controls";
import Playlist from "./Playlist";

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleChangeTrack = (id: number) => {
    setCurrentTrack(id);
  };

  const handleNextTrack = () => {
    if (currentTrack === songs.length - 1) {
      setCurrentTrack(0);
      return;
    }
    setCurrentTrack(currentTrack + 1);
  };

  const handlePrevTrack = () => {
    if (currentTrack === 0) {
      setCurrentTrack(songs.length - 1);
      return;
    }
    setCurrentTrack(currentTrack - 1);
  };
  return (
    <div>
      <PlaylistContext.Provider value={{handleNextTrack, handlePrevTrack}}>
        <Controls src={songs[currentTrack].source} />
        <Playlist onChangeTrack={handleChangeTrack} playlist={songs} />
      </PlaylistContext.Provider>
    </div>
  );
};

export default Player;
