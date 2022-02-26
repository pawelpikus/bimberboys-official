import { createContext } from "react";

export const PlaylistContext = createContext({
  active: 0,
  setActive: () => {},
  handleNextTrack: () => {},
  handlePrevTrack: () => {},
});
