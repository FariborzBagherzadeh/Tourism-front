import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import Navbar from "./component/navbar/navbar";
import First from "./component/first/first";
import Second from "./component/second/second";
import Footer from "./component/footer/footer";
import About from "./component/about/about";
import Gallery from "./component/gallery/gallery";

import GalleryPost from "./component/gallerypost/gallerypost";

const Home = (props) => {
  return [<Navbar />, <First />, <Second />, <Gallery />, <Footer />];
};

const Abouts = (props) => {
  return [<Navbar />, <About />, <Footer />];
};
const Gallerypost = (props) => {
  return [<Navbar />, <GalleryPost />, <Footer />];
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={Abouts} />
            <Route exact path="/gallery/:id" component={Gallerypost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
