import { createContext } from 'react';
import { songs } from "./songs";

const initialState = {
    currentSong: 0,
    songs,
    playing: false,
    audio: null,
    nextSong: () => {} ,
    prevSong: () => {},
    SetCurrent: (id: number) => {},
    togglePlaying: () => {},
    handleEnd: () => {},
    songsSet: (songs: []) => {}
  };

const playerContext = createContext(initialState);

export default playerContext;