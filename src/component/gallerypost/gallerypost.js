import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from "./2.jpg";
import comment from "./comment.png";
import "./gallerypost.css";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import Axios from "axios";

class GalleryPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        comments: {},
        description: "",
        start: "",
      },
    };
  }
  componentDidMount() {
    Axios.get("https://tourism-app-fariborz.herokuapp.com/comments").then((res) => {
      let data = res.data;
      console.log(data);
      this.setState({
        data,
      });
    });
  }

  render() {
    const names = Object.keys(this.state.data.comments);
    const cms = Object.values(this.state.data.comments);
    const listnames = names.map((name, cm) => (
      <div>
        <h4>{name}</h4>
        <p>{cms[cm]}</p>
      </div>
    ));
    const ratingChanged = (newRating) => {
      console.log(newRating);
      this.setState({
        clientStar: newRating,
      });
    };
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="postimg">
            <br />
            <br />
            <br />
            <img src={img} alt="" />
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="stars">
            <br />
            <br />
            <form action="http://localhost:5000/star" method="post">
              <ReactStars
                onChange={ratingChanged}
                count={5}
                size={50}
                color2={"#ffd700"}
                value={this.state.data.stars}
              />
              <h4 style={{}}>{this.state.data.stars}/5</h4>
              <br />
              <input type="text" name="star" value={this.state.clientStar} />
              <br />

              <br />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="postp">
            <div>
              <h1 style={{ textTransform: "uppercase" }}>description</h1>
              <br />
              <br />
              <p>{this.state.data.description}</p>
            </div>
            <img src={comment} alt="" />
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="comment">
            <div className="commentbase">
              <div className="eachcomment">
                <div>{listnames}</div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="commentpost">
            <form action="http://localhost:5000/comment" method="post">
              <br />
              <br />
              <Form.Control
                required
                size="lg"
                type="text"
                placeholder="Name"
                name="name"
              />
              <br />
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
              >
                <Form.Control
                  required
                  placeholder="Comment"
                  as="textarea"
                  rows="5"
                  name="comment"
                />
              </Form.Group>
              <br />
              <Button variant="contained" type="submit">
                Send
              </Button>
              <br />
              <br />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default GalleryPost;
