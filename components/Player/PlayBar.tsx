import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import styles from "../../styles/AudioPlayer.module.scss";
import { AudioProgressBar } from "./AudioProgressBar";
import { TimeLabel } from "./TimeLabel";

interface PlaybarProps {}

export const PlayBar = (props: PlaybarProps) => {
  const { togglePlayPause, playing, ready, mute } = useAudioPlayer();
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    mute(muted);
  }, [muted, mute]);

  const backThirty = () => {
    return null;
  };

  const forwardThirty = () => {
    return null;
  };

  return (
    <div className={styles.audioPlayer}>
      <button
        className={styles.playPause}
        onClick={togglePlayPause}
        disabled={!ready}
      >
        {playing ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button className={styles.forwardBackward} onClick={backThirty}>
        <FontAwesomeIcon icon={faBackward} />
        30s
      </button>
      <button className={styles.forwardBackward} onClick={forwardThirty}>
        <FontAwesomeIcon icon={faForward} />
        30s
      </button>
      {/* progress bar */}
      <AudioProgressBar />
      {/* current time / duration*/}
      <TimeLabel />
      {/* mute button */}
      <button
        className={styles.volumeMute}
        onClick={() => setMuted((prevState) => !prevState)}
      >
        {muted ? (
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} />
        )}
      </button>
    </div>
  );
};
