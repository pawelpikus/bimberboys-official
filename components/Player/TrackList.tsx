import { useContext } from "react";
import { PlaylistProps } from "../../types/props";
import styles from "../../styles/AudioPlayer.module.scss";
import { PlaylistContext } from "../../context/playlistContext";
import { useAudioPlayer } from "react-use-audio-player";

const TrackList = ({ playlist }: PlaylistProps) => {
  const { active, setActive } = useContext(PlaylistContext);
  const { load, playing } = useAudioPlayer();

  return (
    <>
      {playlist.map((track, i) => (
        <div
          key={track.id}
          className={
            active === track.id
              ? `${styles.list_item} ${styles.active}`
              : `${styles.list_item}`
          }
          onClick={() => {
            load({ src: track.source, autoplay: !playing, html5: true });
            setActive(track.id);
          }}
        >
          <div className={styles.track_title}>
            <span>{i + 1}</span>
            <span>{track.title}</span>
          </div>
          <span>{track.duration}</span>
        </div>
      ))}
    </>
  );
};

export default TrackList;
