import React from "react";
import { PlaylistProps } from "../../types/props";
import styles from "../../styles/AudioPlayer.module.scss";

const Playlist = ({ playlist, onChangeTrack }: PlaylistProps) => {
  return (
    <ul>
      {playlist.map((track) => {
        <li
          key={track.id}
          className={styles.list_item}
          onClick={() => onChangeTrack(track.id)}
        >
          {track.title}
        </li>;
      })}
    </ul>
  );
};

export default Playlist;
