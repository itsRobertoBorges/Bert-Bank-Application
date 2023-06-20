import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace",
                color: "green" 
              }}
              className="col s5 brand-logo center"
            >
              <i className="material-icons">business</i>
              BERT BANKING
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
