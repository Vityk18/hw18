import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.time,
      inputValue: props.time,
      autoStartButton: props.autostart,
      step: props.step,
    };
  }

  autoStart = () => {
    this.setState((prevState) => ({
      autoStartButton: !prevState.autoStartButton,
    }));
  };

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      value: event.target.value,
    });
  };

  tick() {
    if (this.state.autoStartButton && this.state.value > 0) {
      this.setState((prevState) => ({
        value: prevState.value - 1,
      }));
    }
  }

  Reset = (event) => {
    this.setState({
      value: this.state.inputValue,
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), this.state.step);
  }

  componentDidUpdate() {
    console.log("Залишилось часу " + this.state.value);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="timer">
        <h2>
          set Time: 
          <input
            className="input"
            type="number"
            min="1"
            defaultValue={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </h2>

        <h2>
          Time left:
          <br /> {this.state.value}.
        </h2>
        <button type="button" className="btn btn-primary" onClick={this.Reset}>
          Reset
        </button>
        <br />
        <input
          onClick={this.autoStart}
          className="form-check-input"
          type="checkbox"
          defaultChecked={this.state.autoStartButton ? false : true}
        />
        <label >
          Pause \ Autostart off
        </label>
      </div>
    );
  }
}

export default Timer;
