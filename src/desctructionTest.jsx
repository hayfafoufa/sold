import React, { Component } from "react";

export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "heifa",
      age: "27",
      love: "+oo",
      smile: "barcha",
      miyena: true
    };
  }

  render() {
    return <div>
        {this.state.name}
    </div>;
  }
}

export default Test;
