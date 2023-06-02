import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class DashNavBar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <nav className="dash-nav">
              <b>Hey there,</b> <strong>{user.name.split(" ")[0]}</strong>
              <span className="dash-nav-link">
                <h1><strong>Deposit</strong></h1>
              </span>
              <span className="dash-nav-link">
                <h1><strong>Withdrawl</strong></h1>
              </span>
              <span className="dash-nav-link">
                <h1><strong>View Account</strong></h1>
              </span>
            </nav>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <br></br>
              <b>Welcome to BERT Banking</b>
              <p className="flow-text grey-text text-darken-1">
                <strong>{formattedDate}</strong>
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

DashNavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DashNavBar);

            