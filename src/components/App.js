import React from "react";
import Details from "./Details";
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/watch?v=K1SAtJ8QIcc"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details/>
    </div>
  );
}

export default App;

