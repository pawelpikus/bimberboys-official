import React, { FunctionComponent, useContext } from "react";
import playerContext from "../context/playerContext";
import styles from "../styles/AudioPlayer.module.scss";

const PlayList: FunctionComponent = () => {
  const { songs, SetCurrentSong, setPlaying } = useContext(playerContext);
  return (
    <>
      <div className={styles.list_item}>
        <ol>
          {songs.map((song, i) => (
            <li
              key={i}
              onClick={() => {
                SetCurrentSong(i);
                // setPlaying();
              }}
            >
              <span>{song.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default PlayList;
