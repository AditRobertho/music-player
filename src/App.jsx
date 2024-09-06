import { useState } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import chillHop from "./data";

function App() {
  const [songs, setSongs] = useState(chillHop);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
