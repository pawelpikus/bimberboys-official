import { FunctionComponent, useState, useRef, useEffect } from "react";
import styles from '../styles/AudioPlayer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

interface AudioPlayerProps {
    
}
 
const AudioPlayer: FunctionComponent<AudioPlayerProps> = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const[isMute, setIsMute] = useState(false)
    const [duration, setDuration] = useState<string | undefined>()
    const audioPlayer = useRef<HTMLAudioElement>(null);

    useEffect(()=>{
        const formattedDuration = moment.duration(audioPlayer?.current?.duration, "minutes").humanize()
        setDuration(formattedDuration)
    },[audioPlayer?.current?.readyState])

    const handleIsPlaying=()=>{
        const prevState = !isPlaying
        setIsPlaying(prevState)
        if(prevState){
            audioPlayer.current?.play()
        } else{
            audioPlayer.current?.pause();
        }
    }
    
    return ( 
    <div className={styles.audioPlayer}>
        <audio ref={audioPlayer} src="/audio/chlopcy_zli.mp3" preload="metadata"></audio>
        <button
        className={styles.playPause}
            onClick={handleIsPlaying}>
                {isPlaying ? <FontAwesomeIcon icon={faPause}/>: <FontAwesomeIcon icon={faPlay}/> }
                
        </button>
        <button className={styles.forwardBackward}><FontAwesomeIcon icon={faBackward}/>30s</button>
        <button className={styles.forwardBackward}><FontAwesomeIcon icon={faForward}/>30s</button>

        {/* progress bar */}
        <input type="range" className={styles.progressBar}/>
        
        {/* current time / duration*/}
        <div className={styles.currentTimeDuration}>00:00/{duration}</div>
        <button
        className={styles.volumeMute}
            onClick={()=>setIsMute(!isMute)}>
                {isMute ? <FontAwesomeIcon icon={faVolumeMute}/>: <FontAwesomeIcon icon={faVolumeUp}/> }
                
        </button>
    </div> 
    );
}
 
export default AudioPlayer;