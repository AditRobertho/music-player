import "../styles/_song.scss";

export default function Song({ currentSong }) {
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.name} </h2>
      <h3>{currentSong.artist} </h3>
    </div>
  );
}
