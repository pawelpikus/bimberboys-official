import { createContext } from "react";
import { Props } from "../types/props";

export const songs = [
    { 
      id: 1,
      title: 'Chłopcy źli',
      source: '/audio/chlopcy_zli.mp3',
    },
    { 
      id: 2,
      title: 'Trzy miłości',
      source: '/audio/trzy_milosci.mp3',
    },
    { 
      id: 3,
      title: 'Chłopcy z naszej ulicy',
      source: '/audio/chlopcy.mp3',
      }
]

export const PlaylistContext = createContext({
  handleNextTrack: () => {},
  handlePrevTrack: () => {},
});