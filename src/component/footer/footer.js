import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from "react-social-icons";
import "./footer.css";
export default class FooterPagePro extends Component {
  render() {
    return [
      <MDBFooter
        id="footer"
        color="special-color-dark"
        className=" pt-4 mt-4"
        style={{ fontSize: "1.2em" }}
      >
        <MDBContainer className="text-center text-md-right">
          <MDBRow className="text-center text-md-right mt-3 pb-3">
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Back Up</h6>
              <p>
                <a href="#as" className="footer_link">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#ds" className="footer_link">
                  Gallery
                </a>
              </p>
              <p>
                <a href="#sd" className="footer_link">
                  Help{" "}
                </a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Contact Us
              </h6>
              <p>
                <i className="fa fa-envelope mr-3" />
                fariborz.miad22222222@gmail.com
              </p>

              <p>
                <i className="fa fa-print mr-3" />
                09360666384
              </p>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Site</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </MDBCol>
          </MDBRow>

          <hr />

          <MDBRow>
            <MDBCol md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="#!"> Name.com </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <SocialIcon
                      className="social"
                      bgColor="#FFFFFF"
                      url="http://instagram.com"
                    />
                  </li>
                  <li className="list-inline-item">
                    <SocialIcon
                      className="social"
                      bgColor="#FFFFFF"
                      url="http://twitter.com"
                    />
                  </li>
                  <li className="list-inline-item">
                    <SocialIcon
                      className="social"
                      bgColor="#FFFFFF"
                      url="http://whatsapp.com"
                    />
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>,
    ];
  }
}
