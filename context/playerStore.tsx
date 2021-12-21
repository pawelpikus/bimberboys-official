import React, { FunctionComponent, useReducer } from "react";
import { Props } from "../types/props";
import playerContext from "./playerContext";
import playerReducer from "./playerReducer";
import { songs } from "./songs";
import { ActionTypes } from "./types";

const PlayerState: FunctionComponent<Props> = ({ children }) => {
  const initialState = {
    currentSong: 0,
    currentTime: 0,
    duration: 0,
    songs,
    playing: false,
    audio: null,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set songs array
  const songsSet = (songs: []) =>
    dispatch({ type: ActionTypes.SET_SONGS_ARRAY, data: songs });
  // Set playing state
  const setPlaying = () =>
    dispatch({
      type: ActionTypes.TOGGLE_PLAYING,
      data: (state.playing = !state.playing),
    });

  // set current time
  const setCurrentTime = (time: number) => {
    dispatch({ type: ActionTypes.SET_CURRENT_TIME, data: time });
  };
  //set duration
  const setDuration = (duration: number | undefined) => {
    dispatch({ type: ActionTypes.SET_DURATION, data: duration });
  };
  // Set current song
  const SetCurrentSong = (id: number) =>
    dispatch({ type: ActionTypes.SET_CURRENT_SONG, data: id });

  const playPause = () => {
    state.playing
      ? dispatch({ type: ActionTypes.PAUSE })
      : dispatch({ type: ActionTypes.PLAY, data: state.currentSong });
  };

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrentSong(state.songs.length - 1);
    } else {
      SetCurrentSong(state.currentSong - 1);
    }
  };
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrentSong(0);
    } else {
      SetCurrentSong(state.currentSong + 1);
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
        currentTime: state.currentTime,
        songs: state.songs,
        playing: state.playing,
        audio: state.audio,
        duration: state.duration,
        nextSong,
        prevSong,
        SetCurrentSong,
        setCurrentTime,
        setDuration,
        setPlaying,
        playPause,
        handleEnd,
        songsSet,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerState;
