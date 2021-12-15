import React, { FunctionComponent, useContext } from "react";
import playerContext from "../context/playerContext";
import styles from "../styles/AudioPlayer.module.scss";

const PlayList: FunctionComponent = () => {
  const { SetCurrent, songs } = useContext(playerContext);
  return (
    <>
      <div className={styles.list_item}>
        <ul>
          {songs.map((song, i) => (
            <li key={i} onClick={() => SetCurrent(i)}>
              <span>{song.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PlayList;
