import { useState } from "react";
import emojiDB from "./emojiDb";
import "./style.css";

const App = () => {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");
  const [clickedEmoji, setClickedEmoji] = useState("");

  const handleEmojiSearch = (e) => {
    console.log("Input is : ", e.target.value);
    setInput(e.target.value);
    if (e.target.value in emojiDB) {
      setMeaning(emojiDB[e.target.value]);
    } else {
      setMeaning("Emoji is not in our database!");
    }
  };

  const popularEmojiHandler = (emoji) => {
    console.log("Clicked emoji is", emoji);
    setClickedEmoji(emoji);
    if (emoji in emojiDB) {
      setMeaning(emojiDB[emoji]);
    }
  };

  return (
    <div className="parent">
      <h1 className="heading">Find meaning of emoji</h1>

      <div className="search">
        <input
          value={input}
          type="text"
          className="inputBar"
          onChange={handleEmojiSearch}
          placeholder="Search an emoji to find its meaning..."
        />
      </div>
      {input || clickedEmoji ? (
        <div className="emoji-meaning">
          <div className="emoji-holder">{input || clickedEmoji}</div>
          <div className="meaning-holder">
            <p>{meaning}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="emoji-database">
        <h3>Emojis in Database...</h3>
        <ul className="wrapper">
          {Object.keys(emojiDB).map((emoji) => (
            <li key={emoji} onClick={() => popularEmojiHandler(emoji)}>
              {emoji}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: "center" }}>
        <a href="https://omkarkulkarni.netlify.app">Visit My Portfolio</a>
      </div>
    </div>
  );
};

export default App;
