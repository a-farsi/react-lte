import React, { Component } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Fotter from "./components/Footer/Fotter";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Fotter />
      </div>
    );
  }
}
