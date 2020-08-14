import React, { Component } from "react";
import Logo from "./1.png";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";

class About extends Component {
  render() {
    return [
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="about1">
              <p>
                <h3>Band is a multidisciplinary creative studio.</h3>

                <h3>
                  We work together to design, create and produce work that we
                  are
                </h3>
                <h3>
                  proud of for folks that we believe in. We are available for
                  hire in
                </h3>
                <h3>
                  a wide range of creative disciplines for a variety of jobs,
                  projects and gigs.
                </h3>
              </p>
            </div>
          </Col>
        </Row>
      </Container>,
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>,
      <Container className="about2">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 style={{ textAlign: "center" }}>HISTORY</h1>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p>
              In the winter of 2011, while serving as working members at ADX,
              Portland’s Makerspace, Zach and Josh met and became friends,
              sharing a love of art, punk, and burritos. With the help of their
              friends at ADX, they formed Band, a diverse, draw-it-by-hand,
              make-it-from-scratch, do-it-together creative studio, in a room
              they built above the shop’s kitchen.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p>
              In the winter of 2011, while serving as working members at ADX,
              Portland’s Makerspace, Zach and Josh met and became friends,
              sharing a love of art, punk, and burritos. With the help of their
              friends at ADX, they formed Band, a diverse, draw-it-by-hand,
              make-it-from-scratch, do-it-together creative studio, in a room
              they built above the shop’s kitchen.
            </p>
            <br />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>+989360666384</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>fariborz@gmail.com</h3>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{ textAlign: "center" }}
          >
            <img src={Logo} id="imgAbout" alt="1" />
          </Col>
        </Row>
      </Container>,
    ];
  }
}
export default About;
