import { FunctionComponent, useState } from "react";
import styles from '../styles/AudioPlayer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

interface AudioPlayerProps {
    
}
 
const AudioPlayer: FunctionComponent<AudioPlayerProps> = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    return ( 
    <div className={styles.audioPlayer}>
        <audio src="/audio/chlopcy_zli.mp3"></audio>
        <button
        className={styles.playPause}
            onClick={()=>setIsPlaying(!isPlaying)}>
                {isPlaying ? <FontAwesomeIcon icon={faPause}/>: <FontAwesomeIcon icon={faPlay}/> }
                
        </button>
        <button className={styles.forwardBackward}><FontAwesomeIcon icon={faBackward}/>30s</button>
        <button className={styles.forwardBackward}><FontAwesomeIcon icon={faForward}/>30s</button>

        {/* current time */}
        <div>00:00</div>

        {/* progress bar */}
        <div>
            <input type="range" />
        </div>
        {/* current time */}
        <div>02:00</div>
    </div> 
    );
}
 
export default AudioPlayer;