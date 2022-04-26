import React, { Component } from "react";
import Clock from "./Clock";
import "./ToggleButton.css";

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: true,
    };
  }

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  render() {
    let clockElement = "";

    if (this.state.showClock) {
      clockElement = <Clock toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = (
        <button onClick={this.toggleClock} className="show-clock">
          show clock
        </button>
      );
    }

    return <div className="toggle-clock">{clockElement}</div>;
  }
}

export default ToggleButton;
