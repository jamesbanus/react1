import React, { Component } from "react";

class IsClick extends Component {
  // state = {  }
  render() {
    return (
      <h2>
        {this.props.click ? "Click the Button" : "Don't Click the Button"}
      </h2>
    );
  }
}

export default IsClick;
