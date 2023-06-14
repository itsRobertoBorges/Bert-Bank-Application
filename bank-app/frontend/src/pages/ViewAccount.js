import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import "../components/dashboard/Dashboard.css";
import { Link } from "react-router-dom"; 

class ViewAccount extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const { depositAmount} = this.props;

    return (
      <div className="view-account-container">
        <h2 className="view-account-title">Account Summary</h2>
        <div className="view-account-details">
          <h3>
            <strong>Welcome, {user.name.split(" ")[0]}</strong>
          </h3>
          <p className="total-saved-label">
            <span className="label">Total Saved:</span>
            <span className="value">${depositAmount}</span>
          </p>
        </div>
        <button className="btn-logout" onClick={this.onLogoutClick}>
          Logout
        </button>
        <Link
            to="/dashboard"
            style={{
              fontFamily: "monospace",
              marginTop: "20px", 
            }}
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons">arrow_back</i>
        </Link>
      </div>
    );
  }
}

ViewAccount.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  depositAmount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  depositAmount: state.deposit.amount,
});

export default connect(mapStateToProps, { logoutUser })(ViewAccount);
