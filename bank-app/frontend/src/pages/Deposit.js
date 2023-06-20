import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, depositAmount } from "../actions/authActions";
import { Link } from "react-router-dom";
import depositReducer from "../reducers/depositReducer";

class Deposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      accountType: "",
    };
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount } = this.state;
    this.props.depositAmount(amount);
    this.setState({ amount: "", accountType: "" });
  };

  render() {
    const { amount } = this.state;

    return (
      <div className="deposit-container">
        <h2 className="deposit-title" style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>
          Deposit
        </h2>
        <Link
          to="/dashboard"
          style={{
            fontFamily: "monospace",
            color: "yellowgreen",
          }}
          className="col s5 brand-logo center black-text"
        >
          <i className="material-icons green-text">arrow_back</i>
        </Link>
        <div className="deposit-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount" style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>
                Amount:
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={amount}
                onChange={this.handleChange}
                required
                style={{ color: "green", backgroundColor: "black" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                color: "green",
                backgroundColor: "black",
                fontFamily: "Share Tech Mono, monospace",
              }}
            >
              Deposit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Deposit.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  depositAmount: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser, depositAmount })(Deposit);
