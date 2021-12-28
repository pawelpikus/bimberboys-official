import React, { useState } from "react";
import { PlaylistContext, songs } from "../../context/playlistContext";
import Controls from "./Controls";
import Playlist from "./Playlist";
import styles from "../../styles/AudioPlayer.module.scss";

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [active, setActive] = useState(0)

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
    <div className={styles.player_container}>
      <PlaylistContext.Provider value={{ handleNextTrack, handlePrevTrack, active, setActive }}>
        <Controls src={songs[currentTrack].source} trackId={songs[currentTrack].id}/>
        <Playlist onChangeTrack={handleChangeTrack} playlist={songs} />
      </PlaylistContext.Provider>
    </div>
  );
};

export default Player;
