import { FunctionComponent, useState, useRef, useEffect } from "react";
import styles from "../styles/AudioPlayer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

interface AudioPlayerProps {}

const AudioPlayer: FunctionComponent<AudioPlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [duration, setDuration] = useState("");
  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let seconds = audioPlayer.current?.duration;
    if (seconds) {
      seconds = Math.floor(seconds);
      setDuration(calculateTime(seconds));
    }
  }, [
    audioPlayer?.current?.readyState,
    audioPlayer?.current?.onloadedmetadata,
  ]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const handleIsPlaying = () => {
    const prevState = !isPlaying;
    setIsPlaying(prevState);
    if (prevState) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
  };

  return (
    <div className={styles.audioPlayer}>
      <audio
        ref={audioPlayer}
        src="/audio/chlopcy_zli.mp3"
        preload="metadata"
      ></audio>
      <button className={styles.playPause} onClick={handleIsPlaying}>
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button className={styles.forwardBackward}>
        <FontAwesomeIcon icon={faBackward} />
        30s
      </button>
      <button className={styles.forwardBackward}>
        <FontAwesomeIcon icon={faForward} />
        30s
      </button>

      {/* progress bar */}
      <input type="range" className={styles.progressBar} />

      {/* current time / duration*/}
      <div className={styles.currentTimeDuration}>
        00:00/{duration && duration}
      </div>
      <button className={styles.volumeMute} onClick={() => setIsMute(!isMute)}>
        {isMute ? (
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
