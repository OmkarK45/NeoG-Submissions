import { useState } from "react";
import songDB from "./songDB";
import Song from "./components/Song";

const App = () => {
  const [genre, setGenre] = useState("Rock");

  const genreHandler = (g) => {
    setGenre(g);
  };
  console.log(genre);
  return (
    <div className="App">
      <h1>My Favorite Songs</h1>
      <p>
        These are my song recommendations. All of these are really popular
        songs! Can't listen enough of these
      </p>
      <div className="button-wrapper">
        {Object.keys(songDB).map((genre, i) => (
          <button onClick={() => genreHandler(genre)} className="btn" key={i}>
            {genre}
          </button>
        ))}
      </div>
      <div className="list-wrapper">
        {songDB[genre].map((e, index) => (
          <Song key={index} data={e} />
        ))}
      </div>
    </div>
  );
};

export default App;
