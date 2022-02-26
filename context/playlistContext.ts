import { createContext } from "react";

export const PlaylistContext = createContext({
  active: 0,
  setActive: (id: number) => {},
  handleNextTrack: () => {},
  handlePrevTrack: () => {},
});
