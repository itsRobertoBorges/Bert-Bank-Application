import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="background-image"></div>
        <div className="row">
          <div className="col s12 center-align">
            <img
              src="./green_coin.png"
              alt="corp art"
              style={{ maxWidth: "300px", maxHeight: "500px" }}
            />
            <h4
              style={{
                fontFamily: "Share Tech Mono, monospace",
                color: "greenyellow"
              }}
            >
              <b>Welcome!</b> This is a simple Banking Application built using the MERN stack from scratch
            </h4>
            <p
              className="flow-text grey-text text-darken-1"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              This is a (minimal) full-stack app with user authentication via passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  fontFamily: "Share Tech Mono, monospace",
                  color: "black",
                  backgroundColor: "green"
                }}
                className="btn btn-large waves-effect waves-light hoverable"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  fontFamily: "Share Tech Mono, monospace"
                }}
                className="btn btn-large btn-flat waves-effect black green-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
