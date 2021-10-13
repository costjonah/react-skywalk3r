import React from "react";
import "/Users/JonahC/HR/SEI/Senior/react-skywalk3r/react-skywalk3r/client/dist/styles.css";
import ThreeFiber from "./ThreeFiber.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [ready, setReady] = React.useState(false);
  return (
    <>
      <div className="currentTarg"></div>
      <div className="wrapper">
        <ThreeFiber />
      </div>
      <div className="header-wrapper">
        <div className="title">REACT SKYWALK3R</div>
        <div className="controls">WASD TO MOVE · MOUSE TO LOOK</div>
        <div className="githubHandle">
          <FontAwesomeIcon icon={faGithub} /> COSTJONAH
        </div>
      </div>
    </>
  );
}

export default App;
