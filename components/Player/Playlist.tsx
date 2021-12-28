import React, { useContext, useState } from "react";
import { PlaylistProps } from "../../types/props";
import styles from "../../styles/AudioPlayer.module.scss";
import { PlaylistContext } from "../../context/playlistContext";

const Playlist = ({ playlist, onChangeTrack }: PlaylistProps) => {
  const {active, setActive} = useContext(PlaylistContext)
  return (
    <>
        {playlist.map((track, i) => (
          <div 
            key={track.id} 
            className={active === track.id ? `${styles.list_item} ${styles.active}`: `${styles.list_item}`}  
            onClick={() => {onChangeTrack(track.id); setActive(track.id)}}>
            <div className={styles.track_title}>
              <span>{i+1}</span>
              <span>{track.title}</span>
            </div>
            <span>{track.duration}</span>
          </div>
        ))}
    </>
  );
};

export default Playlist;
