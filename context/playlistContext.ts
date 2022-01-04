import { createContext } from "react";

export const songs = [
    { 
      id: 0,
      title: 'Chłopcy źli',
      source: '/audio/chlopcy_zli.mp3',
      duration: '04:34'
    },
    { 
      id: 1,
      title: 'Trzy miłości',
      source: '/audio/trzy_milosci.mp3',
      duration: '03:40'
    },
    { 
      id: 2,
      title: 'Chłopcy z naszej ulicy',
      source: '/audio/chlopcy.mp3',
      duration: '04:17'
      }
]

export const PlaylistContext = createContext({
  active: 0,
  setActive: (id: number)=>{},
  handleNextTrack: () => {},
  handlePrevTrack: () => {},
});