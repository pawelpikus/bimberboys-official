import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";
import { PlaylistContext } from "../../context/playlistContext";
import { AudioPlayerProps } from "../../types/props";
import styles from "../../styles/AudioPlayer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

const Controls = ({ src }: AudioPlayerProps) => {
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentTrackMoment, setCurrentTrackMoment] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setCurrentTrackDuration(0);
    setCurrentTrackMoment(0);
    setProgressBarWidth("0");
    
  }, [src]);
  
  console.log(progressBarWidth)

  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number>(0);
  
  const { handleNextTrack, handlePrevTrack } = useContext(PlaylistContext);

  useEffect(() => {
    if(audioPlayer.current&&progressBar.current){
      const seconds = Math.floor(audioPlayer.current.duration);
      setCurrentTrackDuration(seconds);
      progressBar.current.max = seconds.toString();
    }
    
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

  const handleStop = () => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0.0;
      setIsPlaying(false);
      setCurrentTrackMoment(0);
    }
  };

  const handlePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if(audioPlayer.current){
      if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying)
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
    }
    
  };

  const whilePlaying = () => {
    if(progressBar.current && audioPlayer.current){
      progressBar.current.value = audioPlayer.current.currentTime.toString();
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
    
    
  }

  const handleTimeUpdate = (playNext: () => void) => {
    if (audioPlayer.current?.currentTime === audioPlayer.current?.duration) {
      playNext();
    }
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current && audioPlayer.current) {
      setProgressBarWidth(`${Math.floor(parseInt(progressBar.current.value) / currentTrackDuration * 100)}%`)
      progressBar.current.style.setProperty(
        "--bar-before-width", progressBarWidth);
      setCurrentTrackMoment(parseInt(progressBar.current.value))
    }
  };

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      audioPlayer.current.currentTime = parseInt(progressBar.current.value);
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
      <audio
        ref={audioPlayer}
        src={src}
        preload="metadata"
        onLoadedMetadata={()=>(audioPlayer.current && setCurrentTrackDuration(audioPlayer.current.duration))}
        onTimeUpdate={() => handleTimeUpdate(handleNextTrack)}
      >
        Sorry, your browser is outdated!
      </audio>
      <button className={styles.playPause} onClick={handlePlay}>
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
        {calculateTime(currentTrackMoment) || "00:00"}/
        {calculateTime(currentTrackDuration) || "00:00"}
      </div>
      {/* mute button */}
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

export default Controls;
