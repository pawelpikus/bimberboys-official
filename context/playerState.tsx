import React, { FunctionComponent, useReducer } from "react";
import { Props } from "../types/props";
import playerContext from "./playerContext";
import playerReducer from "./playerReducer";
import { songs } from "./songs";
import { ActionTypes } from "./types";

const PlayerState: FunctionComponent<Props> = ({ children }) => {
  const initialState = {
    currentSong: 0,
    songs,
    playing: false,
    audio: null,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set songs array
  const songsSet = (songs: []) =>
    dispatch({ type: ActionTypes.SET_SONGS_ARRAY, data: songs });
  // Set playing state
  const togglePlaying = () =>
    dispatch({
      type: ActionTypes.TOGGLE_PLAYING,
      data: state.playing ? false : true,
    });
  // Set current song
  const SetCurrent = (id: number) =>
    dispatch({ type: ActionTypes.SET_CURRENT_SONG, data: id });

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1);
    } else {
      SetCurrent(state.currentSong - 1);
    }
  };
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0);
    } else {
      SetCurrent(state.currentSong + 1);
    }
  };
  // End of Song
  const handleEnd = () => {
    if (state.currentSong === state.songs.length - 1) {
      return;
    } else {
      nextSong();
    }
  };

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.songs,
        playing: state.playing,
        audio: state.audio,
        nextSong,
        prevSong,
        SetCurrent,
        togglePlaying,
        handleEnd,
        songsSet,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerState;
