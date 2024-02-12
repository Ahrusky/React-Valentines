import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Awe you sure ; - ; ?",
  "Really sure?",
  "Sos, please",
  "Why you do dis to me ; - ; ?",
  "I wheel cry",
  "Sos break N heart...in this economy?",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="moonka kiss"
            src="https://media.tenor.com/22w_5_1Iee8AAAAM/monkey-lick.gif"
          />
          <h1 className="text"> YIPPEEEEEE!!!</h1>
        </>
      ) : (
        <>
          <img
            alt="wocky tiptapping"
            src="https://media1.tenor.com/m/y_kcQuaQk3gAAAAC/rocky-hail-mary.gif"
          />

          <h2>Will you be my Valentine?</h2>
          <div>
            <button
              className="yesButton"
              style={{
                background: "green",
                fontSize: `${yesButtonSize}px`,
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="noButton"
              style={{ background: "red" }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
