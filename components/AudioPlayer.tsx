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
import { AudioPlayerProps } from "../types/props";

const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    let seconds = audioPlayer.current?.duration;
    if (seconds && progressBar.current) {
      seconds = Math.floor(seconds);
      setDuration(seconds);
      progressBar.current.max = seconds.toString();
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
    setIsPlaying((prevState) => !prevState);
    if (prevState && audioPlayer.current) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current?.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };
  const changePlayerCurrentTime = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.style.setProperty(
        "--bar-before-width",
        `${(parseFloat(progressBar.current.value) / duration) * 100}%`
      );
      setCurrentTime(parseFloat(progressBar.current.value));
    }
  };

  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime.toString();
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      audioPlayer.current.currentTime = parseFloat(progressBar.current.value);
      changePlayerCurrentTime();
    }
  };

  const backThirty = () => {
    if (progressBar.current) {
      let backThirty = parseFloat(progressBar.current.value);
      backThirty -= 30;
      progressBar.current.value = backThirty.toString();
      changeRange();
    }
  };

  const forwardThirty = () => {
    if (progressBar.current) {
      let forwardThirty = parseFloat(progressBar.current.value);
      forwardThirty += 30;
      progressBar.current.value = forwardThirty.toString();
      changeRange();
    }
  };

  const handleMute = () => {
    if (audioPlayer.current) {
      if (!isMuted) {
        audioPlayer.current.muted = true;
      } else {
        audioPlayer.current.muted = false;
      }
    }

    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer} src={`/audio/${src}`} preload="metadata"></audio>
      <button className={styles.playPause} onClick={handleIsPlaying}>
        {isPlaying ? (
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
      <input
        type="range"
        defaultValue={0}
        ref={progressBar}
        className={styles.progressBar}
        onChange={changeRange}
      />

      {/* current time / duration*/}
      <div className={styles.currentTimeDuration}>
        {calculateTime(currentTime)}/{calculateTime(duration && duration)}
      </div>
      <button className={styles.volumeMute} onClick={handleMute}>
        {isMuted ? (
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
