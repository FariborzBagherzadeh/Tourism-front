import React, { Component } from "react";
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import "./second.css";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import icon from "./tourism.png";
class Second extends Component {
  render() {
    return [
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="col1">
            <h1 style={{ textAlign: "center" }}>TOURISM</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col2">
            <p>
              <h2>Lorem</h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates necessitatibus quasi fugiat alias? Voluptatem,
              expedita. Voluptates rem dolore maxime repellendus impedit sint
              quibusdam. Dolor voluptate ad odio, maxime nihil consectetur.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col3">
            <img src={pic2} alt="" />
          </Col>
        </Row>
      </Container>,

      <Container style={{ marginTop: "15%" }}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col4">
            <img src={pic3} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col4">
            <h3>Lorem</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              neque saepe iure sed dignissimos velit, ab provident nulla dolorem
              eaque magnam aut ullam reiciendis tempora recusandae blanditiis
              distinctio deleniti est vel quaerat fuga voluptates temporibus
              error nemo? Enim cupiditate error et deserunt rem tempore, nulla
            </p>
          </Col>
        </Row>
      </Container>,
      <div style={{ marginTop: "10% " }}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="col5">
              <h1>THE CITY</h1>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col5">
              <h3>Lorem</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                neque saepe iure sed dignissimos velit, ab provident nulla
                dolorem eaque magnam aut ullam reiciendis tempora recusandae
                blanditiis distinctio deleniti est vel quaerat fuga voluptates
                temporibus error nemo? Enim cupiditate error et deserunt rem
                tempore, nulla
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="col5">
              <h3>Lorem</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                neque saepe iure sed dignissimos velit, ab provident nulla
                dolorem eaque magnam aut ullam reiciendis tempora recusandae
                blanditiis distinctio deleniti est vel quaerat fuga voluptates
                temporibus error nemo? Enim cupiditate error et deserunt rem
                tempore, nulla
              </p>
              <br />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="col6">
              <img src={icon} alt="" />
            </Col>
          </Row>
        </Container>
      </div>,
      <Element name="cards" className="element" />,
      <Container style={{ marginTop: "15%", backgroundColor: "#0f1923" }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="col7">
            <h1>GALLERY</h1>
          </Col>
        </Row>
      </Container>,
    ];
  }
}
export default Second;
