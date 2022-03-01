import { useCallback, useEffect, useRef, useState } from "react";
import { useAudioPosition } from "react-use-audio-player";
import styles from "../../styles/AudioPlayer.module.scss";
type ProgressBarProps = {};

export const AudioProgressBar = (props: ProgressBarProps) => {
  const { duration, seek, percentComplete } = useAudioPosition({
    highRefreshRate: true,
  });

  const [barWidth, setBarWidth] = useState("0%");
  const progressBar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBarWidth(`${percentComplete}%`);
  }, [percentComplete]);

  const goTo = useCallback(
    (event: React.MouseEvent) => {
      const { pageX: eventOffsetX } = event;

      if (progressBar.current) {
        const elementOffsetX = progressBar.current.offsetLeft;
        const elementWidth = progressBar.current.clientWidth;
        const percent = (eventOffsetX - elementOffsetX) / elementWidth;
        seek(percent * duration);
        console.log(elementOffsetX, elementWidth, eventOffsetX);
      }
    },
    [duration, seek]
  );

  return (
    <div onClick={goTo} ref={progressBar} className={styles.progressBar}>
      <div style={{ width: barWidth }} className={styles.progressBar_tick} />
    </div>
  );
};
