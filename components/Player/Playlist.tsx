import React from "react";
import { PlaylistProps } from "../../types/props";
import styles from "../../styles/AudioPlayer.module.scss";

const Playlist = ({ playlist, onChangeTrack }: PlaylistProps) => {
  console.log(playlist)
  return (
    <div className={styles.list_item}>
      <ul>
        {playlist.map((track) => {
          <li
            key={track.id}
            onClick={() => onChangeTrack(track.id)}
          >
            <span>{track.title}</span>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Playlist;
