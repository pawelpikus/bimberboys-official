import React from "react";
import { useAudioPosition } from "react-use-audio-player";
import { calculateTime } from "../../utils/calculateTime";
import styles from "../../styles/AudioPlayer.module.scss";

export const TimeLabel = () => {
  const { duration, position } = useAudioPosition({ highRefreshRate: true });
  if (duration === Infinity) return null;
  const elapsed = typeof position === "number" ? position : 0;

  return (
    <div className={styles.currentTimeDuration}>
      {elapsed && duration
        ? `${calculateTime(elapsed)} / ${calculateTime(duration)}`
        : `00:00/00:00`}
    </div>
  );
};
