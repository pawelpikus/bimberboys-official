import React, { useState } from "react";
import styles from "../../styles/AudioPlayer.module.scss";
import { songs } from "../../data/songs";
import { AudioPlayerProvider } from "react-use-audio-player";
import { TrackList } from "./TrackList";
import { PlayBar } from "./PlayBar";

const Player = () => {
  const [active, setActive] = useState(0);
  return (
    <AudioPlayerProvider>
      <div className={styles.player_container}>
        <PlayBar />
        <TrackList songs={songs} active={active} setActive={setActive} />
      </div>
    </AudioPlayerProvider>
  );
};

export default Player;
