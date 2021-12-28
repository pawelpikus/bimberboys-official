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
    trackId: number;
  }

  export interface PlaylistProps{
    playlist: { 
        id: number;
        title: string;
        source: string;
        duration: string;
    }[]
    onChangeTrack: (id: number) => void
  }

  export interface PlaylistContext{
    handleNextTrack: () => void;
    handlePrevTrack: () => void;
  }
  
  export interface IFormInputs {
    name: string
    email: string
    message: string
    acceptTerms: boolean
  }
  