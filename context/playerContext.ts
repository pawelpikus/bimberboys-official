import { createContext, ReactEventHandler } from 'react';
import { songs } from "./songs";

const initialState = {
    currentSong: 0,
    currentTime: 0,
    duration: 0,
    songs,
    playing: false,
    audio: null,
    nextSong: () => {} ,
    prevSong: () => {},
    SetCurrentSong: (id: number) => {},
    setCurrentTime: (time: number) => {},
    setDuration: (duration: number | undefined) => {},
    setPlaying: () => {},
    playPause: () => {},
    handleEnd: () => {},
    songsSet: (songs: []) => {}
  };

const playerContext = createContext(initialState);

export default playerContext;