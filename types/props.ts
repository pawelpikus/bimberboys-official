import React from "react";

export interface Props {
    lightTheme?: boolean;
    children?: React.ReactNode;
}

export interface YoutubeProps{
    embedId: string;
}

export interface AudioPlayerProps {
    src: string;
  }

  export interface PlaylistProps{
    playlist: { 
        id: number;
        title: string;
        source: string;
    }[]
    onChangeTrack: (id: number) => void
  }

  export interface PlaylistContext{
    handleNextTrack: () => void;
    handlePrevTrack: () => void;
  }
  