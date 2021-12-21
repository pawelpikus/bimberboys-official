import { ActionTypes } from "./types";

interface State {
  currentSong: number;
  songs: { title: string; source: string }[];
  playing: boolean;
  audio: null;
  currentTime: number;
  duration: number;
}

interface Action {
  type: ActionTypes;
  data?: any;
}

const playerReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_SONGS_ARRAY:
      return {
        ...state,
        songs: action.data,
      };
    case ActionTypes.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
      };
    case ActionTypes.TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data,
      };
    case ActionTypes.PLAY:
      return {
        ...state,
        playing: true,
        currentSong: action.data || state.currentSong,
      };
    case ActionTypes.PAUSE:
      return {
        ...state,
        playing: false,
      };
    case ActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.data };
    case ActionTypes.SET_DURATION:
      return { ...state, duration: action.data };
    default:
      return state;
  }
};
export default playerReducer;
