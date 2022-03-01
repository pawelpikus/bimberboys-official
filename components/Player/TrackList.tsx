import { PlaylistProps } from "../../types/props";
import styles from "../../styles/AudioPlayer.module.scss";
import { useAudioPlayer } from "react-use-audio-player";

export const TrackList = ({ songs, active, setActive }: PlaylistProps) => {
  const { load, playing } = useAudioPlayer();

  return (
    <>
      {songs.map((track, i) => (
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
