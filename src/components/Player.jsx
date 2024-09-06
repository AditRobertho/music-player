import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/_player.scss";
import { useRef, useState } from "react";

export default function Player({ currentSong, setIsPlaying, isPlaying }) {
  const iconSize = "2x";

  const audioRef = useRef();

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const [songInfo, setSongInfo] = useState({
    current: null,
    duration: null,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, current, duration });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.current)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size={iconSize}
        />
        <FontAwesomeIcon
          className="play"
          icon={faPlay}
          size={iconSize}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size={iconSize}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}
