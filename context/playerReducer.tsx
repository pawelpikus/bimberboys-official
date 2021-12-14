import { ActionTypes } from "./types";

interface State {
  currentSong: number;
  songs: { title: string; source: string }[];
  playing: boolean;
  audio: null;
}

interface Action {
  type: ActionTypes;
  data: any;
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
        playing: true,
      };
    case ActionTypes.TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data,
      };
    default:
      return state;
  }
};
export default playerReducer;
