import React, { Component } from "react";


import vid from "./1.mp4";
import "./first.css";
class First extends Component {
  render() {
    return [<video src={vid} className="video" autoPlay loop></video>];
  }
}
export default First;
