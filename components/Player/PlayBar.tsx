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
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import styles from "../../styles/AudioPlayer.module.scss";
import { AudioProgressBar } from "./AudioProgressBar";
import { TimeLabel } from "./TimeLabel";
import { songs } from "../../data/songs";

export const PlayBar = () => {
  const { togglePlayPause, load, playing, ready, mute, loading, error } =
    useAudioPlayer();
  const { position, seek, duration } = useAudioPosition();
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    load({ src: songs[0].source, autoplay: false, html5: true });
  }, []);

  useEffect(() => {
    mute(muted);
  }, [muted, mute]);

  const backThirty = () => {
    const newPosition = position - 30;
    if (position > 30) {
      return seek(newPosition);
    }
    return seek(0);
  };

  const forwardThirty = () => {
    const newPosition = position + 30;
    if (position > duration - 30) {
      return seek(duration - 1);
    }
    return seek(newPosition);
  };

  return (
    <>
      {!error && !ready && loading ? (
        <div>Wczytuję...</div>
      ) : (
        <div style={{ visibility: "hidden" }}>Audio ready</div>
      )}

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
        <AudioProgressBar />
        <TimeLabel />
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
    </>
  );
};
