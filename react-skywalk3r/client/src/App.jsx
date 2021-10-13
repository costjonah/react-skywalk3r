import React from "react";
import axios from "axios";
import "../dist/styles.css";
import ThreeFiber from "./ThreeFiber.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetObj: {},
      clearMsg: "",
    };
    this.getTargetData = this.getTargetData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  getTargetData = (planet) => {
    axios
      .get(`/horizons/${planet}`)
      .then((planetData) => {
        this.setState(
          {
            planetObj: {
              name: planetData.data.englishName.toUpperCase(),
              mass:
                planetData.data.mass.massValue +
                " x 10^" +
                planetData.data.mass.massExponent +
                " kg",
              gravity: planetData.data.gravity,
              density: planetData.data.density,
            },
            clearMsg: "SPACE TO CLEAR",
          },
          () => {
            console.log(this.state.planetObj);
          }
        );
      })
      .catch((err) => {
        throw err;
      });
  };

  clearData = (e) => {
    this.setState({
      planetObj: {},
      clearMsg: "",
    });
  };

  render() {
    return (
      <>
        <div className="currentTarg">
          {this.state.planetObj.name}
          <br />
          {this.state.planetObj.mass
            ? "mass: " + this.state.planetObj.mass
            : null}
          <br />
          {this.state.planetObj.density
            ? "density: " + this.state.planetObj.density + " g/cm³"
            : null}
          <br />
          {this.state.planetObj.gravity
            ? "gravity: " + this.state.planetObj.gravity + " m/s²"
            : null}
        </div>
        <div
          className="wrapper"
          onKeyPress={(e) => e.key === " " && this.clearData(e)}
        >
          <ThreeFiber targetClick={this.getTargetData} />
        </div>
        <div className="header-wrapper">
          <div className="title">REACT SKYWALK3R</div>
          <div className="controls">WASD TO MOVE · MOUSE TO LOOK</div>
          <div className="githubHandle">
            <FontAwesomeIcon icon={faGithub} /> COSTJONAH
          </div>
        </div>
        <div className="clearData">{this.state.clearMsg}</div>
      </>
    );
  }
}

export default App;
