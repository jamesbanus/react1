import React, { Component } from "react";
import Header from "./components/Header";
import IsClick from "./components/IsClick";

class App extends Component {
  state = { click: false };

  onToggle = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    return (
      <>
        <Header name={"First React App"} />
        <button onClick={this.onToggle}>The Button</button>
        <IsClick click={this.state.click} />
      </>
    );
  }
}

export default App;
