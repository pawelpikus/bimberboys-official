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