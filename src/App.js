import React, { Component } from "react";

import ModalWindow from "./Modal/ModalWindow";
import Cards from "./component/Cards";

class App extends Component {
  render() {
    return (
      <div>
        <ModalWindow />
        <Cards />
      </div>
    );
  }
}

export default App;