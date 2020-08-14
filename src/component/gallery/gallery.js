import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import pic1 from "./1.jpg";
import "./gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        post: {},
      },
    };
  }
  componentDidMount() {
    Axios.get("https://tourism-app-fariborz.herokuapp.com/card").then((res) => {
      let data = res.data;
      this.setState({
        data,
      });
    });
  }

  render() {
    const id = Object.keys(this.state.data.post);
    const x = Object.values(this.state.data.post);

    const posts = id.map((i, index) => (
      <Col sm={12} xs={12} md={6} lg={6} xl={6} id="colcard">
        <Link to={`/gallery/${i}`} target="_blank">
          <Card className="bg-dark text-white" id="card">
            <Card.Img src={pic1} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{x[index].title}</Card.Title>

              <Card.Text>{x[index].description}</Card.Text>
              <Button variant="contained">WATCH NOW</Button>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Col>
    ));
    return [
      <Container
        fluid
        style={{
          marginTop: "10%",
        }}
      >
        <Row>{posts}</Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>,
    ];
  }
}
export default Gallery;
