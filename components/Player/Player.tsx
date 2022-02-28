import React, { useState } from "react";
import { PlaylistContext } from "../../context/playlistContext";
import Controls from "./Controls";
import Playlist from "./TrackList";
import styles from "../../styles/AudioPlayer.module.scss";
import { songs } from "../../data/songs";
import { AudioPlayerProvider } from "react-use-audio-player";
import TrackList from "./TrackList";

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [active, setActive] = useState(0);

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
    <AudioPlayerProvider>
      <div className={styles.player_container}>
        <div>Playbar</div>
        <TrackList playlist={songs} onChangeTrack={handleChangeTrack} />
      </div>
    </AudioPlayerProvider>
  );
};

export default Player;
