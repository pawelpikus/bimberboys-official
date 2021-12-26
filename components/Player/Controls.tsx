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

const calculateTime = (time: number) => {
  if (time === 0) {
    return "0:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}:0${seconds}`;
};

const Controls = ({ src }: AudioPlayerProps) => {
  const [currentTrackDuration, setCurrentTrackDuration] = useState("0");
  const [currentTrackMoment, setCurrentTrackMoment] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef<HTMLAudioElement | null>();

  const [handleNextTrack, handlePrevTrack] = useContext(PlaylistContext);

  const handleStop = () => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0.0;
      setIsPlaying(false);
      setCurrentTrackMoment(0);
    }
  };

  const handlePlay = () => {
    if (audioPlayer.current?.paused || audioPlayer.current?.ended) {
      audioPlayer.current.play();
      setIsPlaying(true);
    } else {
      audioPlayer.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleMetadata = () => {
    if (audioPlayer.current) {
      const duration = Math.floor(audioPlayer.current.duration);
      setCurrentTrackDuration(calculateTime(duration));
    }
  };

  const handleTimeUpdate = (playNext: () => void) => {
    if (audioPlayer.current) {
      setCurrentTrackMoment(Math.floor(audioPlayer.current.currentTime));
      setProgressBarWidth(
        Math.floor(
          (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
        ) + "%"
      );
    }
    if (audioPlayer.current?.currentTime === audioPlayer.current?.duration) {
      playNext();
    }
  };

  useEffect(() => {
    setCurrentTrackDuration("0");
    setCurrentTrackMoment(0);
    setProgressBarWidth("0");
    handlePlay();
    return () => {
      handleStop();
    };
  }, [src]);

  useLayoutEffect(() => {
    audioPlayer;
  });

  return (
    <div className={styles.audioplayer}>
      <audio
        id="audioPlayer"
        preload="metadata"
        onLoadedMetadata={handleMetadata}
        onTimeUpdate={() => handleTimeUpdate(handleNextTrack)}
      >
        <source src={src} type="audio/ogg" />
        Sorry, your browser is outdated!
      </audio>
    </div>
  );
};

export default Controls;
